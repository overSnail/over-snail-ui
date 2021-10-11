
import Button from './packages/button'
import Radio from "./packages/radio";
import RadioGroup from './packages/radio-group';
import Checkbox from "./packages/checkbox";
import CheckboxGroup from './packages/checkbox-group';
import Input from './packages/input'
import InputNumber from "./packages/input-number";

const components = {
  Button,
  Input,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  InputNumber,
}


const install = function (Vue, options = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(`os${key}`, components[key]);
  });


  // Vue.prototype.$message = Message;
}

export default install