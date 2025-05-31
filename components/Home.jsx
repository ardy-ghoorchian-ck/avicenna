import React, {useState} from 'react';
import Head from "next/head";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
    Typography
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import ImageIcon from "@mui/icons-material/Image";
import MicIcon from "@mui/icons-material/Mic";
import MedicationIcon from "@mui/icons-material/Medication";
import ScienceIcon from "@mui/icons-material/Science";
const DRAWER_WIDTH = 280;

const mockChatHistory = [
    {id: 1, title: "How does photosynthesis work?", timestamp: "2h ago"},
    {id: 2, title: "What is quantum computing?", timestamp: "5h ago"},
    {id: 3, title: "Explain machine learning", timestamp: "Yesterday"},
];

const mockMedicalRecords = {
    prescriptions: [
        {id: 1, title: "Amoxicillin 500mg", date: "2024-03-15", type: "prescription"},
        {id: 2, title: "Ibuprofen 400mg", date: "2024-03-10", type: "prescription"},
    ],
    labWorks: [
        {
            id: 1,
            title: "Complete Blood Count",
            date: "2024-03-14",
            type: "lab",
            provider: "Lab Corps",
            orderNumber: "LC-2024-001"
        },
        {
            id: 2,
            title: "Lipid Panel",
            date: "2024-03-01",
            type: "lab",
            provider: "Lab Corps",
            orderNumber: "LC-2024-002"
        },
        {
            id: 3,
            title: "Thyroid Function Test",
            date: "2024-02-28",
            type: "lab",
            provider: "Lab Corps",
            orderNumber: "LC-2024-003"
        },
    ]
};


function Home(props) {
    const [drawerOpen, setDrawerOpen] = useState(true);

    const renderMedicalItem = (item) => {
        const icon = item.type === "prescription" ? <MedicationIcon/> : <ScienceIcon/>;
        const secondaryText = item.type === "lab"
            ? `${item.provider} • Order ${item.orderNumber} • ${new Date(item.date).toLocaleDateString()}`
            : new Date(item.date).toLocaleDateString();

        return (
            <ListItem
                key={item.id}
                button
                sx={{
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                    borderRadius: 1,
                    mx: 1,
                    mb: 0.5,
                }}
            >
                <ListItemIcon sx={{minWidth: 40, color: 'grey.500'}}>
                    {icon}
                </ListItemIcon>
                <ListItemText
                    primary={item.title}
                    secondary={secondaryText}
                    primaryTypographyProps={{
                        noWrap: true,
                        fontSize: '0.9rem',
                    }}
                    secondaryTypographyProps={{
                        sx: {
                            color: 'grey.500',
                            fontSize: '0.8rem',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }
                    }}
                />
            </ListItem>
        );
    };



    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#1a1b1e',
            display: 'flex',
        }}>
            <Head>
                <title>Moody</title>
            </Head>

            <Drawer
                variant="persistent"
                anchor="left"
                open={drawerOpen}
                sx={{
                    width: DRAWER_WIDTH,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: DRAWER_WIDTH,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Box sx={{pt: 2, px: 2}}>
                    <Typography variant="h6" sx={{mb: 2, fontWeight: 500}}>
                        Chat History
                    </Typography>
                </Box>
                <Divider sx={{borderColor: 'rgba(255, 255, 255, 0.1)'}}/>
                <List>
                    {mockChatHistory.map((chat) => (
                        <ListItem
                            key={chat.id}
                            button
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                },
                                borderRadius: 1,
                                mx: 1,
                                mb: 0.5,
                            }}
                        >
                            <ListItemIcon sx={{minWidth: 40}}>
                                <ChatIcon sx={{color: 'grey.500'}}/>
                            </ListItemIcon>
                            <ListItemText
                                primary={chat.title}
                                secondary={chat.timestamp}
                                primaryTypographyProps={{
                                    noWrap: true,
                                    fontSize: '0.9rem',
                                }}
                                secondaryTypographyProps={{
                                    sx: {color: 'grey.500', fontSize: '0.8rem'}
                                }}
                            />
                        </ListItem>
                    ))}
                </List>

                <Box sx={{pt: 3, px: 2}}>
                    <Typography variant="h6" sx={{mb: 2, fontWeight: 500}}>
                        Medical Records
                    </Typography>
                </Box>
                <Divider sx={{borderColor: 'rgba(255, 255, 255, 0.1)'}}/>

                <List subheader={
                    <Box sx={{px: 2, py: 1}}>
                        <Typography variant="subtitle2" sx={{color: 'grey.500', fontWeight: 500}}>
                            Prescriptions
                        </Typography>
                    </Box>
                }>
                    {mockMedicalRecords.prescriptions.map(renderMedicalItem)}
                </List>

                <List subheader={
                    <Box
                        sx={{px: 2, py: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Typography variant="subtitle2" sx={{color: 'grey.500', fontWeight: 500}}>
                            Lab Works
                        </Typography>
                    </Box>
                }>
                    {mockMedicalRecords.labWorks.map(renderMedicalItem)}
                </List>
            </Drawer>

            <Box component="main" sx={{
                flexGrow: 1,
                p: 3,
                transition: 'margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: 3,

                }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            color: 'white',
                            fontWeight: 400,
                            marginBottom: 4,
                            fontSize: '2.5rem'
                        }}
                    >
                        Moody
                    </Typography>

                    <Box sx={{
                        width: '100%',
                        maxWidth: '800px',
                        position: 'relative',
                    }}>
                        <TextField
                            fullWidth
                            placeholder="Ask anything..."
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    padding: '12px',
                                },
                            }}
                        />
                        <Box sx={{
                            position: 'absolute',
                            right: '12px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            display: 'flex',
                            gap: 1
                        }}>
                            <IconButton size="small" sx={{color: 'grey.500'}}>
                                <ImageIcon/>
                            </IconButton>

                            <IconButton size="small" sx={{color: 'grey.500'}}>
                                <MicIcon/>
                            </IconButton>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Home;