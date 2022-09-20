import * as React from "react";
import Form, { Field } from "../../../packages/field-form/src/index";

export default function App() {
  const [form] = Form.useForm();
  return (
    <div>
      <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>
      <Form form={form}></Form>
    </div>
  );
}
