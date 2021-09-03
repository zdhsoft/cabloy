import { wrapItem } from 'prosemirror-menu';

export const ButtonAlignLeft = {
  node: 'container',
  title: 'EditorButtonTitleAlignLeft',
  attrs: { params: 'hljs-left' },
  icon: { material: 'format_align_left' },
  onBuild: wrapItem,
};

export const ButtonAlignCenter = {
  node: 'container',
  title: 'EditorButtonTitleAlignCenter',
  attrs: { params: 'hljs-center' },
  icon: { material: 'format_align_center' },
  onBuild: wrapItem,
};

export const ButtonAlignRight = {
  node: 'container',
  title: 'EditorButtonTitleAlignRight',
  attrs: { params: 'hljs-right' },
  icon: { material: 'format_align_right' },
  onBuild: wrapItem,
};
