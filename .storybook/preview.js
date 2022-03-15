import { StoryThemeProvider } from './StoryThemeProvider';
import { storyBackgrounds } from './storyHelpers';

// background colors
const backgrounds = storyBackgrounds();

export const decorators = [StoryThemeProvider];

export const parameters = {
  backgrounds,
  options: ['Foundations', 'Components'],
};
