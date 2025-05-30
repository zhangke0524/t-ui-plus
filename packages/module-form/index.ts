import ModuleForm from "./src/index.vue"
import { withInstall } from "../withInstall"

const TModuleForm = withInstall(ModuleForm)
export default TModuleForm
export type TModuleFormInstance = InstanceType<typeof ModuleForm>
export * from './src/type'
