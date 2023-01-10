import { FallingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <FallingLines
      color="#2802ff"
      width="100"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
  );
};
