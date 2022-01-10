// material
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { LoginForm } from '../components/login';
// image
import login from '../img/login.svg'
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  maxWidth: '90%',
  maxHeight: '90%',
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 500,
  margin: 'auto',
  display: 'flex',
  minHeight: '70vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(6, 0)
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title="登录">
      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              登录
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>输入账号信息</Typography>
          </Stack>
          <LoginForm />
          <Typography variant="body2" align="center" sx={{ mt: 3 }} />
        </ContentStyle>
      </Container>

      <SectionStyle>
        <Typography variant="h4" sx={{ px: 5, mt: 10, mb: 5 }}>
          你好，欢迎回来！
        </Typography>
        <Box
          component="img"
          src={login}
          sx={{ height: 500, mx: 'auto', my: { xs: 5, sm: 10 } }}
        />
      </SectionStyle>

      
    </RootStyle>
  );
}
