<script>
import LeftNav from '@/components/Blog/LeftNav.vue';
import { reactive } from '@vue/reactivity';
import axios from "axios";
export default {
    components:{
        LeftNav,
    },
    setup(){
        const emailData = reactive({
            name:'',
            mail:'',
            phone:'',
            msg:''
        })

        const sendMailEvent = (e)=>{
            e.preventDefault();
            if(emailData.name === ''){
                alert('姓名格式有誤');
                return
            }else if(emailData.phone === '' || parseInt(emailData.phone).toString() == 'NaN'){
                alert('電話格式有誤');
                return
            }else if(emailData.mail === ''){
                alert('E-mail格式有誤');
                return
            }else if(emailData.msg === ''){
                alert('訊息是空的');
                return
            }

            axios.post(
                'url',
                emailData,
                {
                    headers:{'Content-Type': 'application/json'}
                }).then((res)=>{
                    console.log(res);
                }).catch((err)=>{
                    console.log(err);
                })

        }

        return{emailData,sendMailEvent}
    }
}
</script>

<template>
    <div class="form">
      <table>
          <tr>
              <td><input v-model="emailData.name" type="text" placeholder="姓名"></td>
          </tr>
          <tr>
              <td><input v-model.number="emailData.phone" type="tel" placeholder="電話"></td>
          </tr>
          <tr>
              <td><input v-model="emailData.mail" type="mail" placeholder="電子信箱"></td>
          </tr>
          <tr>
              <td>
                  <textarea v-model="emailData.msg" placeholder="您的訊息"></textarea>
              </td>
          </tr>
          <tr>
              <td>
                  <a @click="sendMailEvent" href="#" class="send">送出</a>
              </td>
          </tr>
      </table>
    </div>
</template>

<style scoped lang="scss">
  @import '~@/assets/scss/_mixins.scss';
  p{
      color: #fff;
  }
  .form{
      max-width: 760px;
      width:$full;
      position: relative;
      z-index: 2;
      margin: 0 auto;
      padding-bottom: 100px;
      padding-top: 100px;
      .send{
          display: block;
          border-radius: 3px;
          width:100px;
          text-align: center;
          letter-spacing: 3px;
          text-indent: 3px;
          height: 45px;
          line-height: 45px;
          background-color: $white;
          &:hover{
              opacity: 0.8;
          }
      }
      table{
          width:$full;
          tr{
              td{
                padding-bottom: 20px;
                input,textarea{
                    width: $full;
                    border-radius: 3px;
                    padding: 0 7px;
                    background-color: #eee;
                }
                input{
                    height: 50px;
                    color: $black;
                }
                textarea{
                    padding: 7px;
                    height: 200px;
                }
              }
          }
      }
  }
</style>