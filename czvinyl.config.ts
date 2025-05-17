import type { CzVinylConfig } from 'cz-vinyl'

const config: CzVinylConfig = {
  headerFormat: '{type}({scope}): {subject}',
  bodyFormat: '{body}',
  commitTypes: [
    { value: 'feat', description: '新增功能' },
    { value: 'fix', description: '修复缺陷' },
    { value: 'docs', description: '文档更新' },
    { value: 'style', description: '代码格式（不影响功能，例如空格、分号等）' },
    {
      value: 'refactor',
      description: '重构代码（既不是新增功能，也不是修复 bug）'
    },
    { value: 'perf', description: '性能优化' },
    { value: 'test', description: '增加测试' },
    { value: 'chore', description: '构建过程或辅助工具变动' }
  ],
  maxCommitLineWidth: 72,
  typeQuestion: '请选择提交类型:',
  scopeQuestion: '请选择修改范围（可选）:',
  skipScope: false,
  // scopes: ['', 'types', 'hooks', 'utils', 'components', 'views', 'store'],
  ticketIdQuestion: '请输入关联的任务号（可选）:',
  skipTicketId: true,
  subjectQuestion: '请简要描述提交内容（必填）:',
  subjectMaxLength: 50,
  subjectMinLength: 5,
  bodyQuestion: '请输入详细描述（可选）:',
  skipBody: true,
  skipBreakingChanges: true,
  issuesQuestion: '请输入要关闭的issue（可选，例如:#1）:',
  skipIssues: false,
  openAiToken: null
}

export default config
