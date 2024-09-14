import Loading from '@/components/UI/loading/Loading';
import { Box } from '@mui/material';

const LoadingPage = () => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Loading />
    </Box>
  );
};

export default LoadingPage;
