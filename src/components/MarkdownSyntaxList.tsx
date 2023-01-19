
import {
  FaListOl as OlIcon,
  FaListUl as UlIcon,
  FaCode as CodeIcon,
  FaItalic as ItalicIcon,
  FaStrikethrough,
  FaTable as TableIcon,
  FaLink as LinkIcon,
  FaImage as ImageIcon,
} from 'react-icons/fa';
import { RiListCheck2 } from 'react-icons/ri';
import { TbBlockquote } from 'react-icons/tb';

const markdownSyntaxList = [
  {
    type: 'heading_1',
    value: '# Heading 1',
    icon: <strong>H1</strong>,
  },
  {
    type: 'heading_2',
    value: '## Heading 2',
    icon: <strong>H2</strong>,
  },
  {
    type: 'heading_3',
    value: '### Heading 3',
    icon: <strong>H3</strong>,
  },
  {
    type: 'ordered_list',
    value: '1. Item',
    icon: <OlIcon />,
  },
  {
    type: 'unordered_list',
    value: '* Item',
    icon: <UlIcon />,
  },
  {
    type: 'task_list',
    value: '- [ ] List item',
    icon: <RiListCheck2 />,
  },
  {
    type: 'code_block',
    value: '``` Enter code here ```',
    icon: <CodeIcon />,
  },
  {
    type: 'bold',
    value: '**strong text**',
    icon: <strong>B</strong>,
  },
  {
    type: 'italic',
    value: '*emphasized text*',
    icon: <ItalicIcon />,
  },
  {
    type: 'strikethrough',
    value: ' ~~strikethrough text~~',
    icon: <FaStrikethrough />,
  },
  {
    type: 'blockquote',
    value: '> Blockquote',
    icon: <TbBlockquote />,
  },
  {
    type: 'table',
    value: `
|  |  |
|--|--|
|  |  |

    `,
    icon: <TableIcon />,
  },
  {
    type: 'link',
    value: '[enter link description here](url)',
    icon: <LinkIcon />,
  },
  {
    type: 'image',
    value: '![enter image description here](url)',
    icon: <ImageIcon />,
  },
]

export default markdownSyntaxList