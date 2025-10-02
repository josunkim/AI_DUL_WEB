'use client';

import { JSX } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Paper, Stack, useMediaQuery, useTheme } from '@mui/material';
import { Lightbulb as LightbulbIcon, Business as BusinessIcon, Handshake as HandshakeIcon, Gavel as GavelIcon, EmojiEvents as AwardIcon } from '@mui/icons-material';
import { COMPANY_HISTORY } from '../Constant';

const MotionBox = motion.create(Box);

const iconMapper: Record<string, JSX.Element> = {
  창업: <LightbulbIcon sx={{ color: '#133f3c', fontSize: '1.8rem' }} />,
  법인: <BusinessIcon sx={{ color: '#133f3c', fontSize: '1.8rem' }} />,
  MOU: <HandshakeIcon sx={{ color: '#133f3c', fontSize: '1.8rem' }} />,
  특허: <GavelIcon sx={{ color: '#133f3c', fontSize: '1.8rem' }} />,
  우수기업: <AwardIcon sx={{ color: '#133f3c', fontSize: '1.8rem' }} />,
};

const HistoryPage = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md')); // md 이하 = 모바일/태블릿

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        bgcolor: 'linear-gradient(180deg, #f9fbfc 0%, #eef3f7 100%)',
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
      }}
    >
      {/* 제목 */}
      <Typography
        variant='h3'
        fontWeight='bold'
        mb={{ xs: 6, md: 10 }}
        textAlign='center'
        sx={{
          fontSize: 'clamp(1.1rem, 4vw, 3rem)',
          color: '#133f3c',
        }}
      >
        COMPANY HISTORY
      </Typography>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '1000px',
          mx: 'auto',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: isSmall ? '20px' : '50%',
            width: '4px',
            background: 'linear-gradient(180deg, #0f766e, #14b8a6)',
            transform: isSmall ? 'none' : 'translateX(-50%)',
            borderRadius: 2,
          },
        }}
      >
        {COMPANY_HISTORY.map((item, index) => {
          const keyword = Object.keys(iconMapper).find((k) => item.content.includes(k));
          const icon = keyword ? iconMapper[keyword] : <LightbulbIcon sx={{ color: '#133f3c' }} />;

          const alignLeft = isSmall || index % 2 === 0;

          return (
            <MotionBox
              key={index}
              initial={{ opacity: 0, x: alignLeft ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              sx={{
                display: 'flex',
                justifyContent: alignLeft ? 'flex-start' : 'flex-end',
                mb: { xs: 6, md: 10 },
                pl: isSmall ? 6 : 0,
                pr: isSmall ? 0 : 0,
                position: 'relative',
              }}
            >
              {/* 카드 */}
              <Paper
                elevation={4}
                sx={{
                  p: { xs: 2.5, md: 4 },
                  maxWidth: { xs: '100%', md: '380px' },
                  borderRadius: 4,
                  bgcolor: '#fff',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Stack direction='row' spacing={2} alignItems='center' mb={1.5}>
                  {icon}
                  <Typography
                    fontWeight='bold'
                    sx={{
                      color: '#0f766e',
                      fontSize: 'clamp(0.5rem,1.5vw,2rem)',
                    }}
                  >
                    {item.date}
                  </Typography>
                </Stack>
                <Typography
                  variant='body1'
                  sx={{
                    fontSize: { xs: '0.9rem', md: '1.05rem' },
                    lineHeight: 1.6,
                    color: '#333',
                  }}
                >
                  {item.content}
                </Typography>
              </Paper>

              {/* 타임라인 원 */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: isSmall ? '20px' : '50%',
                  transform: 'translate(-50%, -50%)',
                  width: { xs: 18, md: 26 },
                  height: { xs: 18, md: 26 },
                  borderRadius: '50%',
                  bgcolor: '#0f766e',
                  border: '4px solid #fff',
                  boxShadow: '0 0 8px rgba(20,184,166,0.4)',
                  zIndex: 2,
                }}
              />
            </MotionBox>
          );
        })}
      </Box>
    </Box>
  );
};

export default HistoryPage;
