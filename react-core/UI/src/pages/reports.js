import React from 'react'
import { Button, Card, Checkbox, Col, DatePicker, Avatar, Skeleton, PageHeader, Row, Upload, Modal, message } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Meta from 'antd/lib/card/Meta';
import axios from 'axios';
import { EditOutlined, EllipsisOutlined, InboxOutlined, SettingOutlined, UploadOutlined } from '@ant-design/icons';
const dateFormat = 'YYYY/MM/DD';
const Reports = () => {

    const plainOptions = ['Unit Price', 'Cash Allocation', 'UT Cash Allow Reports(TD)', 'Data Dump'];
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const props = {
        name: 'file',
        action: 'http://localhost:4000/DataUpload',
        headers: {
            authorization: 'authorization-text',
        },
        // FileList: [
        //     {
        //         mit: "",
        //         code: "",
        //         currency_code: "",
        //         subscription: "",
        //         redemption: "",
        //         expense: "",
        //         net: "",
        //     }
        // ]
        // ,
        onChange(info) {
            console.log('info: ', info);
            const isLt2M = (info.file.size / 1024 / 1024) < 2;
            if (!isLt2M) {
                return message.error('File must smaller than 2MB!');
            }

            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        }
    }


    return (
        <div>
            <Row>
                <>
                    <Card style={{
                        width: 1028, display: "flex", justifyContent: "center", borderRadius: '30px',
                        marginbottom: '15px', border: '1px solid'
                    }}>
                        <PageHeader className="site-page-header"
                            subTitle="Processing Data and Price Import" style={{ marginLeft: "135px" }}
                        ></PageHeader>
                        <div style={{ marginLeft: "28px" }}>
                            <span>Processing Trade Date: </span>
                            <DatePicker onChange={onChange} defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                            <Upload {...props} >
                                <Button icon={<UploadOutlined />} type="primary" style={{ borderRadius: '10px', width: "200px", height: "35px", marginLeft: "10px" }}>Upload File</Button>
                            </Upload>
                            <div >
                                <Checkbox style={{ marginTop: "15px", marginLeft: "150px" }}>Import Price</Checkbox>
                                <Link to="/resources" style={{ marginLeft: "10px" }}>Label30</Link>
                            </div>
                        </div>
                    </Card>
                    {/* <Col  >
                    <p style={{fontSize:'19px', marginLeft:'10px'}}>Upload image</p>
                    </Col> */}
                </>
            </Row>
            <Row >
                <Col span={14} style={{ borderColor: '2px' }}>
                    <Card style={{
                        width: 1005, display: "flex", justifyContent: "center", borderRadius: '30px', marginTop: "10px",
                        marginbottom: '15px', border: '1px solid'
                    }}>
                        <PageHeader className="site-page-header"
                            subTitle="Reports and Data Dump" style={{ marginLeft: "150px" }}
                        ></PageHeader>
                        <div style={{ marginLeft: "-10px" }}>
                            <Checkbox.Group options={plainOptions} />
                            {/* <Checkbox></Checkbox>
                        <Checkbox>Checkbox</Checkbox>
                        <Checkbox>Checkbox</Checkbox>
                        <Checkbox>Checkbox</Checkbox> */}
                            <br />
                            <br />
                            <Row style={{ marginLeft: "20px" }}>
                                <Col span={6}><Link to="/">Label25</Link></Col>
                                <Col span={6}><Link to="/">Label26</Link></Col>
                                <Col span={8}><Link to="/">Label27</Link></Col>
                                <Col span={4}><Link to="/">Label28</Link></Col>
                            </Row>
                        </div>
                    </Card>

                </Col>
                <Col span={10}>


                </Col>
            </Row>
            <h3><b>Select Platform(s) to process:</b></h3>

            <div className="site-card-border-less-wrapper">

                <Row>
                    <Col span={8}>
                        <Card title="MPF" style={{
                            width: 320, borderRadius: '30px',
                            marginbottom: '15px', border: '1px solid'
                        }} extra={<Checkbox >Select</Checkbox>}>
                            <Meta
                                title="Details"
                            />
                            <Card>
                                <p><Checkbox>Import and process</Checkbox><Link to='/'>Label1</Link></p>
                                <p><Checkbox>Generate CF Report</Checkbox><Link to='/'>Label2</Link></p>
                                <p><Checkbox>Generate Fields</Checkbox><Link to='/'>Label3</Link></p>
                            </Card>

                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="OSRO" style={{
                            width: 320, borderRadius: '30px',
                            marginbottom: '15px', border: '1px solid'
                        }} extra={<Checkbox >Select</Checkbox>}>
                            <Meta
                                title="Details"
                            />
                            <Card>
                                <p><Checkbox>Import and process</Checkbox><Link to='/'>Label4</Link></p>
                                <p><Checkbox>Generate CF Report</Checkbox><Link to='/'>Label5</Link></p>
                                <p><Checkbox>Generate Fields</Checkbox><Link to='/'>Label6</Link></p>
                            </Card>

                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Macau Pension" style={{
                            width: 320, borderRadius: '30px',
                            marginbottom: '15px', border: '1px solid'
                        }} extra={<Checkbox >Select</Checkbox>}>
                            <Meta
                                title="Details"
                            />
                            <Card>
                                <p><Checkbox>Import and process</Checkbox><Link to='/'>Label7</Link></p>
                                <p><Checkbox>Generate CF Report</Checkbox><Link to='/'>Label8</Link></p>
                                <p><Checkbox>Generate Fields</Checkbox><Link to='/'>Label9</Link></p>
                            </Card>

                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Card title="MSUT" style={{
                            width: 320, borderRadius: '30px',
                            marginbottom: '15px', border: '1px solid', marginTop: "10px"
                        }} extra={<Checkbox >Select</Checkbox>}>
                            <Meta
                                title="Details"
                            />
                            <Card>
                                <p><Checkbox>Import and process</Checkbox><Link to='/'>Label10</Link></p>
                                <p><Checkbox>Generate CF Report</Checkbox><Link to='/'>Label11</Link></p>
                                <p><Checkbox>Generate Fields</Checkbox><Link to='/'>Label12</Link></p>
                            </Card>

                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="MIT" style={{
                            width: 320, borderRadius: '30px',
                            marginbottom: '15px', border: '1px solid', marginTop: "10px"
                        }} extra={<Checkbox >Select</Checkbox>}>
                            <Meta
                                title="Details"
                            />
                            <Card>
                                <p><Checkbox>Import and process</Checkbox><Link to='/'>Label13</Link></p>
                                <p><Checkbox>Generate CF Report</Checkbox><Link to='/'>Label14</Link></p>
                                <p><Checkbox>Generate Fields</Checkbox><Link to='/'>Label16</Link></p>
                            </Card>

                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="PHDAA" style={{
                            width: 320, borderRadius: '30px',
                            marginbottom: '15px', border: '1px solid', marginTop: "10px"
                        }} extra={<Checkbox >Select</Checkbox>}>
                            <Meta
                                title="Details"
                            />
                            <Card>
                                <p><Checkbox>Import and process</Checkbox><Link to='/'>Label16</Link></p>
                                <p><Checkbox>Generate CF Report</Checkbox><Link to='/'>Label17</Link></p>
                                <p><Checkbox>Generate Fields</Checkbox><Link to='/'>Label18</Link></p>
                            </Card>

                        </Card>
                    </Col>
                </Row>
                {/* <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Skeleton avatar active>
                        <Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
                </Card> */}
            </div>

        </div>
    )
}

export default Reports
