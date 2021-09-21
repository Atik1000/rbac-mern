import { Card, message } from 'antd';
import ProForm, {
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { useRequest } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import {submitForm } from './service';
import styles from './style.less';

const BasicForm = () => {
  const { run } = useRequest(submitForm, {
    manual: true,
    onSuccess: () => {
      message.success('product added successfully');
    },

    onError: (e) => {
      message.error(e.message.toString());
      console.log(e);
    },
  });

  const onFinish = async (values) => {
    console.log(values);
    run(values);
  };

  return (
    <PageContainer content="My amazing product entry form">
      <Card bordered={false}>
        <ProForm
          hideRequiredMark
          style={{
            margin: 'auto',
            marginTop: 8,
            maxWidth: 600,
          }}
          name="basic"
          layout="vertical"
          initialValues={{
            public: '1',
          }}
          onFinish={onFinish}
        >
          <ProFormText
            width="md"
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: 'Please enter a title',
              },
            ]}
            placeholder="Please Enter Product Name"
          />
          <ProFormTextArea
            label="Description"
            width="xl"
            name="description"
            rules={[
              {
                required: true,
                message: 'Enter Description',
              },
            ]}
            placeholder="Please Enter Product Description"
          />
          <ProFormDateRangePicker
            label="Manufacture Date"
            width="md"
            name="manufactureDate"
            rules={[
              {
                required: true,
                message: 'Enter a Date',
              },
            ]}
            placeholder={(['Select Date'], [])}
          />
          <ProFormDigit
            label={
              <span>
               Price (USD)
              </span>
            }
            name="price"
            placeholder="Please Enter Price"
            min={0}
            width="xs"
            fieldProps={{
              formatter: (value) => `${value || 0}`,

            }}
          />


          <ProFormRadio.Group
            options={[
              {
                value: '1',
                label: 'Small',
              },
              {
                value: '2',
                label: 'Medium',
              },
              {
                value: '3',
                label: 'Large',
              },
            ]}
            label="Size"
            name="productSize"
          />

        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
