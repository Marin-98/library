import { ref } from "vue";

interface User {
  email: string;
  password: string;
}

export const loginUser = ref<User>({
  email: "",
  password: "",
});

interface Rules {
  email: {
    type: string;
    message: string;
    required: boolean;
    trigger: string;
  }[];
  password: ({
    required: boolean;
    message: string;
    trigger: string;
    min?: undefined;
    max?: undefined;
  } | {
    min: number;
    max: number;
    message: string;
    trigger: string;
    required?: undefined;
  })[];
}

// 校验规则
export const rules = ref<Rules>({
  email: [
    {
      type: "email",
      message: "请输入合法的email地址",
      required: true,
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Password不能为空",
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "Password不能少于6位",
      trigger: "blur",
    },
  ],
});