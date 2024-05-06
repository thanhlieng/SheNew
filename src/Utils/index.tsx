import {navigationRef} from '../Navigation';

export const onPressToDetail = ({
  text,
  image,
}: {
  text: string;
  image: string;
}) => {
  navigationRef.navigate('Detail', {text, image});
};
