'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { MENU_ITEMS } from '@/shared/Constant';

export default function Header() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const go = (path: string) => () => {
    router.push(path);
    setAnchorEl(null);
    setMobileOpen(false);
  };

  const handleMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);

  const toggleDrawer = () => {
    setMobileOpen((prev) => !prev);
    setAnchorEl(null); // Drawer 열 때 메뉴 닫기
  };

  return (
    <AppBar position='sticky' sx={{ bgcolor: 'background.paper', color: 'text.primary', opacity: 0.7 }} elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* 로고 */}
        <Typography variant='h6' fontWeight='bold' sx={{ cursor: 'pointer' }} onClick={go('/')}>
          AI.DUL Inc.
        </Typography>

        {/* PC/태블릿 메뉴 */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          <Button color='inherit' onClick={go('/')}>
            Home
          </Button>

          {/* 서비스 드롭다운 */}
          <Button color='inherit' onClick={handleMenuOpen} aria-controls={Boolean(anchorEl) ? 'service-menu' : undefined} aria-haspopup='true' aria-expanded={Boolean(anchorEl) ? 'true' : undefined}>
            서비스
          </Button>
          <Menu id='service-menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={go('/care/child')}>아동</MenuItem>
            <MenuItem onClick={go('/care/adult')}>부모</MenuItem>
            <MenuItem onClick={go('/care/senior')}>노인</MenuItem>
            <MenuItem onClick={go('/educational')}>교육기관</MenuItem>
          </Menu>

          <Button color='inherit' onClick={go('/introduce')}>
            회사 소개
          </Button>
        </Box>

        {/* 모바일 햄버거 버튼 */}
        <IconButton edge='end' sx={{ display: { xs: 'flex', md: 'none' } }} onClick={toggleDrawer} aria-label='모바일 메뉴 토글'>
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* 모바일 Drawer */}
      <Drawer anchor='right' open={mobileOpen} onClose={toggleDrawer} ModalProps={{ keepMounted: true }}>
        <Box sx={{ width: 240 }} role='presentation'>
          <List component='nav'>
            {MENU_ITEMS.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton onClick={go(item.path)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
