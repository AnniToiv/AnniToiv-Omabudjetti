import Content from '../components/Content'
import { MemoryRouter } from 'react-router'

export default {
  title: 'Components/Content',
  component: Content,
  tags: ['autodocs'],
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
  argTypes: {
    data: { control: 'object' },
  }
}

export const Default = { }

