import Button from "./packages/button";
import Radio from "./packages/radio";
import RadioGroup from "./packages/radio-group";
import Checkbox from "./packages/checkbox";
import CheckboxGroup from "./packages/checkbox-group";
import Input from "./packages/input";
import InputNumber from "./packages/input-number";
import Select from "./packages/select";
import Option from "./packages/option";
import OptionGroup from "./packages/option-group";
import Switch from "./packages/switch";
import DatePicker from "./packages/datepicker";
import Slider from "./packages/slider";
import TimePicker from "./packages/time-picker";
import TimePickerRange from "./packages/time-picker-range";

// 数据展示
import Tag from "./packages/tag";
import Tooltip, { TooltipDirective } from "./packages/tooltip";
import Popover from "./packages/popover";
import Popconfirm from "./packages/popconfirm";
import Dialog from "./packages/dialog";
import Progress from "./packages/progress";
import Tree from "./packages/tree";

// 导航组件
import Breadcrumb from "./packages/breadcrumb";
import BreadcrumbItem from "./packages/breadcrumb-item";

import Alert from "./packages/alert";
import Message from "./packages/message";
import Notice from "./packages/notice";
import Loading, { LoadingDirective } from "./packages/loading";
import MessageBox from "./packages/messagebox";

// 其他
import Collapse from "./packages/collapse";
import CollapseItem from "./packages/collapse-item";

const components = {
  Button,
  Input,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  InputNumber,
  Select,
  Alert,
  Option,
  OptionGroup,
  DatePicker,
  Switch,
  Tag,
  Tooltip,
  Popover,
  Popconfirm,
  Dialog,
  Progress,
  Slider,
  Breadcrumb,
  BreadcrumbItem,
  Tree,
  TimePicker,
  TimePickerRange,
  Collapse,
  CollapseItem
};

const install = function(Vue, options = {}) {
  let config = {
    // 弹窗的默认初始zindex
    zIndex: 2000
  };

  // UI的一些全局配置
  Vue.prototype.$osUI = {
    ...config,
    options
  };

  Object.keys(components).forEach(key => {
    Vue.component(`os${key}`, components[key]);
  });

  Vue.prototype.$message = Message;
  Vue.prototype.$notify = Notice;
  Vue.prototype.$loading = Loading;

  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;

  // loading组件
  Vue.directive("loading", LoadingDirective);
  Vue.directive("tooltip", TooltipDirective);
};

export default install;
