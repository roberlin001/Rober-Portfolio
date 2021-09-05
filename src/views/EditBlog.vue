<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ref } from '@vue/runtime-core';


export default {
    setup(){
        const ckeditorVal = ref('')

        const onEditorInput = (e)=>{
            ckeditorVal.value = e;
        };

        const handCkData = ()=>{
            console.log(ckeditorVal.value);
        };

        return {
            handCkData,
            onEditorInput,
            ckeditorVal,
            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                height:'300px',
            },
        }
    }
}
</script>

<template>
  <div class="edit">
      <table>
          <tr>
              <td>
                  <input class="textInput" type="text" placeholder="請輸入標題">
              </td>
          </tr>
          <tr>
              <td>
                  <input class="textInput" type="text" placeholder="描述">
              </td>
          </tr>
          <tr>
              <td>
                  <select>
                      <option>全部文章</option>
                      <option>網頁知識</option>
                      <option>網頁技術分享</option>
                      <option>電影哈拉</option>
                      <option>NBA反指標</option>
                      <option>生活來打屁</option>
                  </select>
              </td>
          </tr>
          <tr>
              <td>
                  <input class="textInput" type="date">
              </td>
          </tr>
          <tr>
              <td>
                  <ul>
                      <li><input name="001" id="r1" type="radio"><label for="r1">發佈</label></li>
                      <li><input name="001" id="r2" type="radio"><label for="r2">不發佈</label></li>
                  </ul>
              </td>
          </tr>
          <tr>
              <td>
                  <ckeditor @input="onEditorInput" :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
              </td>
          </tr>
          <tr>
              <td>
                  <a href="#" class="btn send" @click="handCkData">送出</a>
                  <a href="#" class="btn back">返回</a>
              </td>
          </tr>
      </table>
  </div>
</template>

<style scoped lang="scss">
@import '~@/assets/scss/_mixins.scss';

.edit{
    max-width: 800px;
    width:$full;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    :deep(.ck-editor__editable){
        height: 300px;
    }
    table{
        width:$full;
        tr{
            td{
                padding-bottom: 20px;
                .textInput{
                    width: $full;
                    height: 40px;
                    padding-left: 7px;
                    padding-right: 7px;
                    
                }
                select{
                    width: $full;
                    height: 40px;
                    padding-left: 7px;
                    padding-right: 7px;
                }
                ul{
                    li{
                        display: inline-block;
                        margin-right: 10px;
                        color: $white;
                        font-size: 16px;
                        input{
                            margin-right: 5px;
                        }
                    }
                }
                .btn{
                    display: inline-block;
                    margin-right: 10px;
                    border-radius: 3px;
                    padding: 7px 25px;
                    font-size: 16px;
                }
                .send{
                    background-color:$white ;
                }
                .back{
                    background-color: #bbb;
                }
            }
        }
    }
}

</style>