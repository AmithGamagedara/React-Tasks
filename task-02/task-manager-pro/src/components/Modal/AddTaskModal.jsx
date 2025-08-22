import { Modal, Form, Input } from "antd";

function AddTaskModal({ isOpen, onClose, onSave }) {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      onSave({ id: "t" + Date.now(), ...values });
      form.resetFields();
      onClose();
    });
  };

  return (
    <Modal
      title="Add New Task"
      open={isOpen}
      onOk={handleOk}
      onCancel={() => {
        form.resetFields();
        onClose();
      }}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea rows={3} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddTaskModal;
