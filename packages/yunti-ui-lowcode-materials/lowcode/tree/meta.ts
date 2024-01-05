import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { getMeta } from '../utils';

const TreeMeta: IPublicTypeComponentMetadata = getMeta('Tree', {
  category: '数据展示',
  configure: {
    props: [
      {
        name: 'treeData',
        title: {
          label: 'treeNodes 数据',
          tip: 'treeData	treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一）	array<{key, title, children, [disabled, selectable]}>	-	',
        },
        setter: ['JsonSetter'],
      },
      {
        name: 'fieldNames',
        title: {
          label: '自定义节点字段',
          tip: 'fieldNames 自定义节点 title、key、children 的字段	object	{ title: title, key: key, children: children }	4.17.0',
        },
        setter: [
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'title',
                    title: { label: 'title' },
                    setter: ['StringSetter'],
                  },
                  {
                    name: 'key',
                    title: { label: 'key' },
                    setter: ['StringSetter'],
                  },
                  {
                    name: 'children',
                    title: { label: 'children' },
                    setter: ['StringSetter'],
                  },
                ],
              },
            },
          },
        ],
      },
      {
        name: 'checkedKeys',
        title: {
          label: '选中复选框的树节点',
          tip: 'checkedKeys	（受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置 checkable 和 checkStrictly，它是一个有checked和halfChecked属性的对象，并且父子节点的选中与否不再关联	string[] | {checked: string[], halfChecked: string[]}	[]	',
        },
        setter: [
          {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'StringSetter',
              },
            },
            initialValue: [],
          },
        ],
      },
      {
        name: 'defaultCheckedKeys',
        title: {
          label: '默认选中复选框的树节点',
          tip: 'defaultCheckedKeys 默认选中复选框的树节点	string[]	[]',
        },
        setter: [
          {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'StringSetter',
              },
            },
            initialValue: [],
          },
        ],
      },
      {
        name: 'defaultExpandedKeys',
        title: {
          label: '默认展开指定的树节点',
          tip: 'defaultExpandedKeys	默认展开指定的树节点	string[]	[]	',
        },
        setter: [
          {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'StringSetter',
              },
            },
            initialValue: [],
          },
        ],
      },
      {
        name: 'defaultSelectedKeys',
        title: {
          label: '默认选中的树节点',
          tip: 'defaultSelectedKeys	默认选中的树节点	string[]	[]	',
        },
        setter: [
          {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'StringSetter',
              },
            },
            initialValue: [],
          },
        ],
      },
      {
        name: 'expandedKeys',
        title: {
          label: '展开指定的树节点',
          tip: 'expandedKeys	（受控）展开指定的树节点	string[]	[]	',
        },
        setter: [
          {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'StringSetter',
              },
            },
            initialValue: [],
          },
        ],
      },
      {
        name: 'loadedKeys',
        title: {
          label: '已经加载的节点',
          tip: 'loadedKeys	（受控）已经加载的节点，需要配合 loadData 使用	string[]	[]',
        },
        setter: [
          {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'StringSetter',
              },
            },
            initialValue: [],
          },
        ],
      },
      {
        name: 'selectedKeys',
        title: {
          label: '设置选中的树节点',
          tip: 'selectedKeys	（受控）设置选中的树节点，多选需设置 multiple 为 true	string[]',
        },
        setter: [
          {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'StringSetter',
              },
            },
            initialValue: [],
          },
        ],
      },
      {
        name: 'filterTreeNode',
        title: {
          label: '按需筛选树节点',
          tip: 'filterTreeNode	按需筛选树节点（高亮），返回 true	function(node)	-	',
        },
        setter: 'FunctionSetter',
      },
      {
        name: 'loadData',
        title: {
          label: '异步加载数据',
          tip: 'loadData	异步加载数据	function(node)	-	',
        },
        setter: 'FunctionSetter',
      },
      {
        name: 'icon',
        title: {
          label: '自定义树节点图标',
          tip: 'icon	自定义树节点图标。	ReactNode | (props) => ReactNode	-	',
        },
        setter: [
          {
            componentName: 'SlotSetter',
            title: '图标插槽',
            initialValue: {
              type: 'JSSlot',
              params: ['props'],
              value: [],
            },
          },
        ],
      },
      {
        name: 'switcherIcon',
        title: {
          label: '自定义树节点的展开/折叠图标',
          tip: 'switcherIcon	自定义树节点的展开/折叠图标	ReactNode | ((props: AntTreeNodeProps) => ReactNode)	-	renderProps: 4.20.0 ',
        },
        setter: [
          {
            componentName: 'SlotSetter',
            title: '图标插槽',
            initialValue: {
              type: 'JSSlot',
              params: ['props'],
              value: [],
            },
          },
        ],
      },
      {
        name: 'titleRender',
        title: {
          label: '自定义渲染节点',
          tip: 'titleRender	自定义渲染节点	(nodeData) => ReactNode	-	4.5.0          ',
        },
        setter: [
          {
            componentName: 'SlotSetter',
            title: '节点插槽',
            initialValue: {
              type: 'JSSlot',
              params: ['nodeData'],
              value: [],
            },
          },
        ],
      },
      {
        name: 'autoExpandParent',
        title: {
          label: '是否自动展开父节点',
          tip: 'autoExpandParent: 是否自动展开父节点	boolean	false	',
        },
        setter: 'BoolSetter',
      },
      {
        name: 'defaultExpandAll',
        title: {
          label: '默认展开所有树节点',
          tip: 'defaultExpandAll	默认展开所有树节点	boolean	false',
        },
        setter: 'BoolSetter',
      },
      {
        name: 'defaultExpandParent',
        title: {
          label: '默认展开父节点',
          tip: 'defaultExpandParent	默认展开父节点	boolean	true',
        },
        defaultValue: true,
        setter: 'BoolSetter',
      },
      {
        name: 'checkable',
        title: {
          label: '节点前添加 Checkbox 复选框',
          tip: 'checkable	节点前添加 Checkbox 复选框	boolean	false',
        },
        setter: 'BoolSetter',
      },
      {
        name: 'checkStrictly',
        title: {
          label: 'checkable 状态下节点选择完全受控',
          tip: 'checkStrictly	checkable 状态下节点选择完全受控（父子节点选中状态不再关联）	boolean	false	',
        },
        setter: 'BoolSetter',
      },
      {
        name: 'selectable',
        title: {
          label: '是否可选中',
          tip: 'selectable	是否可选中	boolean	true',
        },
        defaultValue: true,
        setter: 'BoolSetter',
      },
      {
        name: 'multiple',
        title: {
          label: '支持点选多个节点（节点本身',
          tip: 'multiple	支持点选多个节点（节点本身）	boolean	false	',
        },
        setter: 'BoolSetter',
      },
      {
        name: 'draggable',
        title: {
          label: '设置节点可拖拽',
          tip: 'draggable	设置节点可拖拽，可以通过 icon: false 关闭拖拽提示图标	boolean | ((node: DataNode) => boolean) | { icon?: React.ReactNode | false, nodeDraggable?: (node: DataNode) => boolean }	false	config: 4.17.0',
        },
        defaultValue: false,
        setter: [
          'BoolSetter',
          'FunctionSetter',
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'icon',
                    title: { label: '图标', tip: 'icon' },
                    setter: ['BoolSetter', 'SlotSetter'],
                  },
                  {
                    name: 'nodeDraggable',
                    title: { label: '可拖拽', tip: 'nodeDraggable?: (node: DataNode) => boolean' },
                    setter: ['FunctionSetter'],
                  },
                ],
              },
            },
          },
        ],
      },
      {
        name: 'allowDrop',
        title: {
          label: '是否允许拖拽时放置在该节点',
          tip: 'allowDrop	是否允许拖拽时放置在该节点	({ dropNode, dropPosition }) => boolean	-	',
        },
        setter: 'FunctionSetter',
      },
      {
        name: 'disabled',
        title: {
          label: '将树禁用',
          tip: 'disabled	将树禁用	boolean	false	',
        },
        setter: 'BoolSetter',
      },
      {
        name: 'blockNode',
        title: {
          label: '是否节点占据一行',
          tip: 'blockNode	是否节点占据一行	boolean	false',
        },
        setter: 'BoolSetter',
      },
      {
        name: 'showIcon',
        title: {
          label: '是否展示 TreeNode title 前的图标',
          tip: 'showIcon	是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式	boolean	false	',
        },
        setter: 'BoolSetter',
      },
      {
        name: 'showLine',
        title: {
          label: '是否展示连接线',
          tip: 'showLine	是否展示连接线	boolean | {showLeafIcon: boolean | ReactNode | ((props: AntTreeNodeProps) => ReactNode)}	false	',
        },
        defaultValue: false,
        setter: [
          'BoolSetter',
          {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'showLeafIcon',
                    title: {
                      label: 'showLeafIcon',
                      tip: 'showLeafIcon: boolean | ReactNode | ((props: AntTreeNodeProps) => ReactNode)',
                    },
                    setter: [
                      'BoolSetter',
                      {
                        componentName: 'SlotSetter',
                        title: '图标插槽',
                        initialValue: {
                          type: 'JSSlot',
                          params: ['props'],
                          value: [],
                        },
                      },
                    ],
                  },
                ],
              },
            },
          },
        ],
      },
      {
        name: 'virtual',
        title: {
          label: '设置 false 时关闭虚拟滚动',
          tip: 'virtual	设置 false 时关闭虚拟滚动	boolean	true	4.1.0',
        },
        defaultValue: true,
        setter: 'BoolSetter',
      },
      {
        name: 'height',
        title: {
          label: '设置虚拟滚动容器高度',
          tip: 'height	设置虚拟滚动容器高度，设置后内部节点不再支持横向滚动	number	-	',
        },
        setter: 'NumberSetter',
      },
      {
        name: 'rootStyle',
        title: {
          label: 'Tree 最外层的 style',
          tip: 'rootStyle	添加在 Tree 最外层的 style	CSSProperties	-	4.20.0',
        },
        setter: 'StyleSetter',
        display: 'block',
      },
    ],
    supports: {
      events: [
        {
          name: 'onCheck',
          description: '点击复选框触发',
          template:
            "onCheck(checkedKeys,event,${extParams}){\n// 点击复选框触发\nconsole.log('onCheck',checkedKeys,event);}",
        },
        {
          name: 'onDragEnd',
          description: 'dragend 触发时调用',
          template:
            "onDragEnd({event,node},${extParams}){\n// dragend 触发时调用\nconsole.log('onDragEnd',event,node);}",
        },
        {
          name: 'onDragEnter',
          description: 'dragenter 触发时调用',
          template:
            "onDragEnter({event,node,expandedKeys},${extParams}){\n// dragenter 触发时调用\nconsole.log('onDragEnter',event,node,expandedKeys);}",
        },
        {
          name: 'onDragLeave',
          description: 'dragleave 触发时调用',
          template:
            "onDragLeave({event,node},${extParams}){\n// dragleave 触发时调用\nconsole.log('onDragLeave',event,node);}",
        },
        {
          name: 'onDragOver',
          description: 'dragover 触发时调用',
          template:
            "onDragOver({event,node},${extParams}){\n// dragover 触发时调用\nconsole.log('onDragOver',event,node);}",
        },
        {
          name: 'onDragStart',
          description: '开始拖拽时调用',
          template:
            "onDragStart({event,node},${extParams}){\n// 开始拖拽时调用\nconsole.log('onDragStart',event,node);}",
        },
        {
          name: 'onDrop',
          description: 'drop 触发时调用	',
          template:
            "onDrop({event,node,dragNode,dragNodesKeys},${extParams}){\n// drop 触发时调用\nconsole.log('onDrop',event,node,dragNode,dragNodesKeys);}",
        },
        {
          name: 'onExpand',
          description: '展开/收起节点时触发',
          template:
            "onExpand(expandedKeys,{expanded,node},${extParams}){\n// 展开/收起节点时触发\nconsole.log('onExpand',expandedKeys,expanded,node);}",
        },
        {
          name: 'onLoad',
          description: '节点加载完毕时触发',
          template:
            "onLoad(loadedKeys,{event,node},${extParams}){\n// 节点加载完毕时触发\nconsole.log('onLoad',loadedKeys,event,node);}",
        },
        {
          name: 'onRightClick',
          description: '响应右键点击',
          template:
            "onRightClick({event,node},${extParams}){\n// 响应右键点击\nconsole.log('onRightClick',event,node);}",
        },
        {
          name: 'onSelect',
          description: '点击树节点触发',
          template:
            "onSelect(selectedKeys,event,${extParams}){\n// 点击树节点触发\nconsole.log('onSelect',selectedKeys,event);}",
        },
      ],
    },
  },
});
const snippets: IPublicTypeSnippet[] = [
  {
    title: 'Tree',
    screenshot: '',
    schema: {
      componentName: 'Tree',
      props: {
        __component_name: 'Tree',
        treeData: [
          {
            title: 'parent 1',
            key: '0-0',
            children: [
              {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                  {
                    title: 'leaf',
                    key: '0-0-0-0',
                    disableCheckbox: true,
                  },
                  {
                    title: 'leaf',
                    key: '0-0-0-1',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
];

const meta = {
  ...TreeMeta,
  snippets,
};

export default meta;
