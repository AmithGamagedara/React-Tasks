import { Modal, Form, Input } from "antd";
import { useEffect } from "react";

function EditTaskModal({ isOpen, onClose, task, onSave, isNew }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (task) {
      form.setFieldsValue({
        title: task.title,
        description: task.description,
      });
    } else {
      form.resetFields();
    }
  }, [task, form]);

  const handleOk = () => {
    form.validateFields().then((values) => {
      const updatedTask = task
        ? { ...task, ...values }
        : { id: "t" + Date.now(), ...values };
      onSave(updatedTask);
      onClose();
    });
  };

  return (
    <Modal
      title={isNew ? "Add New Task" : "Edit Task"}
      open={isOpen}
      onOk={handleOk}
      onCancel={onClose}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          title: task?.title || "",
          description: task?.description || "",
        }}
      >
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

export default EditTaskModal;
