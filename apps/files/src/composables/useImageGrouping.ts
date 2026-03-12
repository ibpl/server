import type { INode } from '@nextcloud/files'
import { computed, type Ref } from 'vue'

export interface ImageGroupNode {
  _isImageGroup: true
  // Stable key for VirtualList recycled pool
  source: string
  images: INode[]
  expanded: boolean
}

export type GroupedNode = INode | ImageGroupNode

export function isImageGroup(node: GroupedNode): node is ImageGroupNode {
  return '_isImageGroup' in node && node._isImageGroup === true
}

export interface ImageGroupingConfig {
	mimetypes: string[]
	timespanMinutes: number
}

export function useImageGrouping(
	nodes: Ref<INode[]>,
	expandedGroups: Ref<Set<string>>,
	config: Ref<ImageGroupingConfig>,
) {  return computed<GroupedNode[]>(() => {
    const result: GroupedNode[] = []
    let i = 0

    const { mimetypes, timespanMinutes } = config.value
    const timespanMs = timespanMinutes * 60 * 1000

    if (mimetypes.length === 0) {
      return nodes.value;
		}
    
    const isGroupable = (node: INode) =>
      node.mime !== undefined && mimetypes.includes(node.mime);
    
    while (i < nodes.value.length) {
      const node = nodes.value[i]

      const uploadTime = node.attributes?.['upload_time'] as number

      if (!isGroupable(node)) {
        result.push(node)
        i++
        continue
      }

      const images: INode[] = []
      while (i < nodes.value.length && nodes.value[i].mime?.startsWith('image/')) {
        images.push(nodes.value[i])
        i++
      }

      if (images.length === 1) {
        result.push(images[0])
        continue
      }

      const groupKey = `image-group-${images.map(n => n.fileid).join('-')}`
      const group: ImageGroupNode = {
        _isImageGroup: true,
        source: groupKey,
        images,
        expanded: expandedGroups.value.has(groupKey),
      }
      result.push(group)

      if (expandedGroups.value.has(groupKey)) {
        result.push(...images)
      }
    }

    return result
  })
}