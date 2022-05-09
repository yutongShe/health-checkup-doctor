import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
// components
import Page from '../components/Page';
import logo404 from '../img/404.svg'
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <RootStyle title="页面未找到">
      <Container>
        <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
        <Typography variant="h3" paragraph>
          页面未找到！
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          对不起，我们无法找到你要找的页面。也许你输入了错误的网址？
          请务必检查你的拼写。
        </Typography>

        <Box
          component="img"
          src={logo404}
          sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
        />

        <Button to="/dashboard/detail" size="large" variant="contained" component={RouterLink}>
            回到首页
        </Button>
        </Box>
      </Container>
    </RootStyle>
  );
}
