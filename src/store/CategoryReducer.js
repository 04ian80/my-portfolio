import { Introduce } from '../components/Introduce';
import { Skills } from '../components/Skills';
import { Project } from '../components/Project';

export const toggleCategory = (state, action) => {
  switch (action.type) {
    case 'INTRODUCE':
      return {
        introduceStyle: { color: '#57534e', borderBottom: '1px solid black' },
        skillsStyle: { color: '#a8a29e' },
        projectStyle: { color: '#a8a29e' },
        render: <Introduce />,
      };
    case 'SKILLS':
      return {
        introduceStyle: { color: '#a8a29e' },
        skillsStyle: { color: '#57534e', borderBottom: '1px solid #57534e' },
        projectStyle: { color: '#a8a29e' },
        render: <Skills />,
      };
    case 'PROJECT':
      return {
        introduceStyle: { color: '#a8a29e' },
        skillsStyle: { color: '#a8a29e' },
        projectStyle: { color: '#57534e', borderBottom: '1px solid #57534e' },
        render: <Project />,
      };
    default:
      break;
  }
};

export const categoryInit = {
  render: <Introduce />,
  introduceStyle: { color: '#57534e', borderBottom: '1px solid #57534e' },
  skillsStyle: { color: '#a8a29e' },
  projectStyle: { color: '#a8a29e' },
};
