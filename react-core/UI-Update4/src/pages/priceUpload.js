import React, { useState } from 'react'
import {
	Card,
	Checkbox,
	DatePicker,
	Form,
	Input,
	InputNumber,
	Table,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/lib/upload/Dragger';
import ToDoList from './toDoList';

const columns = [
	{
		title: 'Mit',
		dataIndex: 'mit',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.mit - b.mit,
	},
	{
		title: 'Code',
		dataIndex: 'code',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.code - b.code,
	},
	{
		title: 'Currency code',
		dataIndex: 'currency_code',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.currency_code - b.currency_code,
	},
	{
		title: 'Subscription',
		dataIndex: 'subscription',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.subscription - b.subscription,
	},
	{
		title: 'Redemption',
		dataIndex: 'redemption',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.redemption - b.redemption,
	},
	{
		title: 'Expense',
		dataIndex: 'expense',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.expense - b.expense,
	},
	{
		title: 'Net',
		dataIndex: 'net',
		defaultSortOrder: 'descend',
		sorter: (a, b) => a.net - b.net,
	},
];
const data = [
	{
		key: '1',
		mit: 'Tohn Brown',
		code: 'as',
		currency_code: 'FDF',
		subscription: 78,
		redemption: 45,
		expense: '$1,565',
		net: 10
	},
	{
		key: '2',
		mit: 'Vim Green',
		code: 'fg',
		currency_code: 'ADS',
		subscription: 28,
		redemption: 42,
		expense: '$1,423',
		net: 12
	},
	{
		key: '3',
		mit: 'Koe Black',
		code: 'hg',
		currency_code: 'WEW',
		subscription: 18,
		redemption: 41,
		expense: '$1,767',
		net: 11
	},
	{
		key: '4',
		mit: 'Woe Black',
		code: 'jh',
		currency_code: 'HHF',
		subscription: 79,
		redemption: 49,
		expense: '$1,654',
		net: 19
	},
	{
		key: '5',
		mit: 'Tisabled User',
		code: 'kk',
		currency_code: 'AS',
		subscription: 77,
		redemption: 41,
		expense: '$1,342',
		net: 15
	},
	{
		key: '6',
		mit: 'John Brown',
		code: 'vc',
		currency_code: 'FE',
		subscription: 32,
		redemption: 12,
		expense: '$1,767',
		net: 17
	},
	{
		key: '7',
		mit: 'Joe Black',
		code: 'nb',
		currency_code: 'USD',
		subscription: 54,
		redemption: 42,
		expense: '$1,256',
		net: 87
	},
];


const PriceUpload = () => {
	const [componentSize, setComponentSize] = useState('default');
	const [componentDisabled, setComponentDisabled] = useState(true);

	const onFormLayoutChange = ({ size, disabled }) => {
		setComponentSize(size);
		setComponentDisabled(disabled);

	};

	return (
		<>
			<ToDoList />
			<Card style={{
				width: 1000, borderRadius: '15px',
				marginbottom: '15px', border: '1.5px solid', marginTop: '25px'
			}}>
				<ul style={{
					marginTop: "5px", fontSize: "22px",
				}}>
					<li>Price Upload</li>
				</ul>
				<Form
					labelCol={{
						span: 4,
					}}
					wrapperCol={{
						span: 14,
					}}
					layout="horizontal"
					initialValues={{
						size: componentSize,
					}}
					onValuesChange={onFormLayoutChange}
					size={componentSize}
				>

					<Form.Item label="ISIN">
						<Input />
					</Form.Item>
					<Form.Item label="Fund name">
						<Input />
					</Form.Item>
					<Form.Item label="Price" >
						<InputNumber style={{
							width: "100%",
						}} />
					</Form.Item>
					<Form.Item label="Price date">
						<DatePicker style={{
							width: "100%",
						}} />
					</Form.Item>
					<Checkbox
						style={{
							marginLeft: "160px",
						}}
						checked={componentDisabled}
						onChange={(e) => setComponentDisabled(e.target.checked)}
					>
						Is available
					</Checkbox>
					<Dragger style={{
						marginTop: "10px", width: "570px", height: "35px",
						marginLeft: "160px",
					}}>
						<p className="ant-upload-drag-icon">
							<InboxOutlined />
						</p>
						<p className="ant-upload-text">Click or drag file to this area to upload</p>
					</Dragger>
					<Table
						style={{ width: "100%", margin: "0 auto", marginTop: "10px" }}
						pagination={false}
						columns={columns}
						dataSource={data}
					/>
				</Form>
			</Card>
		</>
	);
}

export default PriceUpload


