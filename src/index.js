import Button from './packages/button'
import Radio from './packages/radio'
import RadioGroup from './packages/radio-group'
import Checkbox from './packages/checkbox'
import CheckboxGroup from './packages/checkbox-group'
import Input from './packages/input'
import InputNumber from './packages/input-number'

import Alert from './packages/alert'
import Message from './packages/message'
import Notice from './packages/notice'
import Loading, { LoadingDirective } from './packages/loading'
import MessageBox from './packages/messagebox'

const components = {
  Button,
  Input,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  InputNumber,
  Alert,
}

const install = function(Vue, options = {}) {
  Object.keys(components).forEach((key) => {
    Vue.component(`os${key}`, components[key])
  })

  Vue.prototype.$message = Message
  Vue.prototype.$notify = Notice
  Vue.prototype.$loading = Loading

  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt

  // loading组件
  Vue.directive('loading', LoadingDirective)
}

export default install