import { Link as RouterLink, Outlet } from 'react-router-dom';
// material
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import logo from '../img/logo.svg';

// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0)
  }
}));

// ----------------------------------------------------------------------

export default function LogoOnlyLayout() {
  return (
    <>
      <HeaderStyle>
        <RouterLink to="/dashboard/home">
          <Box component="img" src={logo} sx={{ height: 40 }} />
        </RouterLink>
      </HeaderStyle>
      <Outlet />
    </>
  );
}
