<template>
  <AutoLoading
    class="magic-form"
    :class="[{ 'hide-bottom': currentHideBottom }, `is-${ currentFormSize }`]"
    @load="onCreate">
    <el-form
      ref="form"
      class="magic-form-content"
      v-on="currentEvents"
      v-bind="currentProps"
      :model="currentModel"
      :rules="currentRules"
      :size="currentFormSize"
      :style="currentContentStyle"
      :label-width="currentLabelWidth"
      :label-position="currentLabelPosition">
      <FormColumns
        :cols="currentCols"
        :store="currentStore"
        :gutter="currentGutter"
        :panels="currentPanels"
        :columns="currentColumns">
        <slot/>
      </FormColumns>
      <div
        v-if="!currentHideBottom"
        :class="currentBtnClass"
        class="magic-form-btn">
        <span>
          <slot name="btn"/>
          <el-checkbox
            v-if="currentCustomCloseable"
            v-model="closeable">
            <span style="font-size: 12px;">
              提交成功后，并关闭对话框
            </span>
          </el-checkbox>
        </span>
        <span>
          <el-button
            size="small"
            @click="onCancel"
            v-if="currentCancelText">
            {{ currentCancelText }}
          </el-button>
          <template
            v-if="currentConfirmText">
            <el-popconfirm
              v-if="currentConfirm"
              @confirm="onConfirm"
              :validate="onValidate">
              <el-button
                style="margin-left: 15px"
                size="small"
                :loading="currentUseLoading ? loading : false"
                type="primary">
                {{ currentConfirmText }}
              </el-button>
            </el-popconfirm>
            <el-button
              v-else
              @click="onSubmit"
              :disabled="currentDisabledSubmit"
              style="margin-left: 15px"
              :loading="currentUseLoading ? loading : false"
              type="primary"
              size="small">
              {{ currentConfirmText }}
            </el-button>
          </template>
        </span>
      </div>
    </el-form>
  </AutoLoading>
</template>

<script type="text/jsx">
  import FormColumns from './columns.vue'
  import AutoLoading from '../../components/AutoLoading/index.vue'
  // import PopoverConfirm from '../../basic/PopoverConfirm/index.vue'
  import Form from '../../model/Form'
  import { tools as Tools } from '../../global'

  export default {
    name: 'MgForm',
    components: {
      FormColumns,
      AutoLoading,

    },
    props: {
      options: {}
    },
    data () {
      return {
        loading: false,
        closeable: false
      }
    },
    setup(props){
      console.log('this.options.setup',props.options.columns[0])
      for(let k of props.options.columns){
        console.log(k)
      }
      props.options.columns.reduce((total,c)=>{
        console.log(2,c)
      })
    },
    computed: {
      currentStore () {
        console.log('this.options',this.options)
        return this.options
      },
      currentConfig () {
        return this.options.config
      },
      currentColumns () {
        return this.options.columns.reduce((result, column) => {
          if (column.isShow(this.currentHideFields, this.currentModel)) {
            column.setDisabled(this.currentDisabledFields, this.currentModel)
            result.push(column)
          }
          return result
        }, [])
      },
      currentPanels () {
        return this.currentConfig.panels
      },
      currentRules () {
        return this.currentConfig.rules
      },
      currentCols () {
        return this.currentConfig.cols
      },
      currentFormSize () {
        return this.currentConfig.size
      },
      currentLabelWidth () {
        return this.currentConfig.labelWidth
      },
      currentLabelPosition () {
        return this.currentConfig.labelPosition
      },
      currentGutter () {
        return this.currentConfig.gutter
      },
      currentConfirm () {
        return this.currentConfig.confirm
      },
      currentBtnAlign () {
        return this.currentConfig.btnAlign
      },
      currentBtnShadow () {
        return this.currentConfig.btnShadow
      },
      currentHideBottom () {
        return this.currentConfig.hideBottom
      },
      currentConfirmText () {
        return this.currentConfig.confirmText
      },
      currentCancelText () {
        return this.currentConfig.cancelText
      },
      currentDisabledFields () {
        return this.currentConfig.disabledFields
      },
      currentDisabledSubmit () {
        const handler = this.currentConfig.disabledSubmit
        return typeof handler === 'function' ? handler() : handler
      },
      currentHideFields () {
        return this.currentConfig.hideFields
      },
      currentCustomCloseable () {
        return this.currentConfig.customCloseable
      },
      currentAutoNotify () {
        return this.currentConfig.autoNotify
      },
      currentUseLoading () {
        return this.currentConfig.useLoading
      },
      currentContentStyle () {
        return this.currentConfig.contentStyle
      },
      currentBtnClass () {
        return [
          `is-${ this.currentBtnAlign }`,
          {
            'is-shadow': this.currentBtnShadow
          }
        ]
      },
      currentModel () {
        return this.currentStore.getValue()
      },
      currentEvents () {
        return this.currentConfig.events
      },
      currentProps () {
        return this.currentConfig.props
      }
    },
    methods: {
      validate (field) {
        return field ? this.$refs.form.validateField(field) : this.$refs.form.validate()
      },
      onValidate (done) {
        return this.validate().then(done)
      },
      onCancel () {
        this.currentStore.emitEvent(Form.Events.cancel, this.currentModel)
      },
      onCreate (done) {
        this.currentStore.create(this, done)
      },
      onSubmit () {
        this.validate().then(this.onConfirm.bind(this))
      },
      onConfirm () {
        this.loading = true
        setTimeout(() => {
          this.currentStore.emitEvent(Form.Events.submit, this.currentModel, (err, ...args) => {
            if (this.currentAutoNotify) {
              if (err instanceof Error) {
                const message = err ? err.message : '服务器错误, 请联系管理员'
                Tools.Notification({ type: 'error', title: '提示', message: message })
              } else {
                Tools.Notification({ type: 'success', title: '提示', message: '操作成功' })
              }
            }
            if (!(err instanceof Error)) {
              if (!this.currentCustomCloseable || (this.currentCustomCloseable && this.closeable)) {
                this.currentStore.emitEvent(Form.Events.close)
              }
              this.currentStore.emitEvent(Form.Events.search, ...args)
            }
            this.loading = false
          })
        }, 0)
      }
    }
  }
</script>
