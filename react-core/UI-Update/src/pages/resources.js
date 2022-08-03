import React from 'react'
import { Card, Checkbox, Col, Row } from 'antd';
import { Box, FormControl, InputLabel, LinearProgress, ListItemText, MenuItem, OutlinedInput, Typography } from '@mui/material';
import Checkboxs from '@mui/material/Checkbox';
import Selects from '@mui/material/Select';
import { Link } from 'react-router-dom';
import Meta from 'antd/lib/card/Meta';

const Resources = () => {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    const [personName, setPersonName] = React.useState([]);
    const [progress, setProgress] = React.useState(0);
    const [showProgress, setShowProgress] = React.useState(false);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 50;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);
    const title = ['MPF', 'OSRO', 'Macau Pension', 'MSUT', 'MIT', 'PHDAA']

    const handleChange = (event) => {
        const data = event.target.value.map((item) => {
            return item;
        })

        if (data.length > 0) {
            setShowProgress(true);
            setTimeout(() => {
                setShowProgress(false);
            }, 3000);
        }

        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <h3 style={{
                marginTop: "10px",
            }}><b>Select Platform(s) to process:</b></h3>

            <div className="site-card-border-less-wrapper">
                <Row>
                    <Col span={8}>
                        <Card style={{
                            width: 985, borderRadius: '30px',
                            marginbottom: '15px', border: '1px solid'
                        }} >
                            <div>
                                <FormControl sx={{ m: 1, width: 300 }} style={{
                                    width: '100%', color: 'black'
                                }}>
                                    <InputLabel id="demo-multiple-checkbox-label">Please Select</InputLabel>
                                    <Selects
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Please Select" />}
                                        renderValue={(selected) => selected.join(',')}
                                        MenuProps={MenuProps}
                                    >
                                        {title.map((name) => (
                                            <MenuItem key={name} value={name} >
                                                <Checkboxs checked={personName.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Selects>
                                </FormControl>
                                {showProgress &&
                                    <Box sx={{ width: '100%' }}>
                                        <LinearProgress variant="determinate" value={progress} />
                                    </Box>}
                            </div>
                            <Meta
                                style={{
                                    marginTop: "10px",
                                }}
                                title="Details"
                            />
                            <Card>
                                <p><Checkbox>Import and process</Checkbox><Link to='/'>Label1</Link></p>
                                <p><Checkbox>Generate CF Report</Checkbox><Link to='/'>Label2</Link></p>
                                <p><Checkbox>Generate Fields</Checkbox><Link to='/'>Label3</Link></p>
                            </Card>
                        </Card>

                    </Col>

                </Row>

            </div>
        </div>
    )
}

export default Resources
