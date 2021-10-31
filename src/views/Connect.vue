<script>
import LeftNav from '@/components/Blog/LeftNav.vue';
import { reactive } from '@vue/reactivity';
import {useRouter} from "vue-router";
import axios from "axios";
export default {
    components:{
        LeftNav,
    },
    setup(){
        const emailData = reactive({
            name:'',
            email:'',
            phone:'',
            message:''
        })
        const router = useRouter();

        const sendMailEvent = (e)=>{
            e.preventDefault();
            if(emailData.name === ''){
                alert('姓名格式有誤');
                return
            }else if(emailData.phone === '' || parseInt(emailData.phone).toString() == 'NaN'){
                alert('電話格式有誤');
                return
            }else if(emailData.email === ''){
                alert('E-mail格式有誤');
                return
            }else if(emailData.message === ''){
                alert('訊息是空的');
                return
            }
            axios.post(
                `${process.env.VUE_APP_MAIL_API}`,
                JSON.stringify(emailData),
                {
                    headers:{'Content-Type': 'application/json'}
                }).then((res)=>{
                    console.log(res);
                    alert('訊息已送出');
                    router.push({path:`/`});
                }).catch((err)=>{
                    console.log(err);
                    alert('訊息不對唷')
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
              <td><input v-model="emailData.phone" type="tel" placeholder="電話"></td>
          </tr>
          <tr>
              <td><input v-model="emailData.email" type="mail" placeholder="電子信箱"></td>
          </tr>
          <tr>
              <td>
                  <textarea v-model="emailData.message" placeholder="您的訊息"></textarea>
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
      padding-left: 30px;
      padding-right: 30px;
      @include breakpoint(m1){
          padding-top: 0;
          padding-bottom: 50px;
      }
      .send{
          display: block;
          border-radius: 3px;
          width:100px;
          text-align: center;
          letter-spacing: 3px;
          text-indent: 3px;
          height: 45px;
          line-height: 45px;
          border: 1px solid $white;
          color: $white;
          &:hover{
              opacity: 0.8;
          }
      }
      table{
          width:$full;
          tr{
              td{
                padding-bottom: 30px;
                input,textarea{
                    width: $full;
                    padding: 0 7px;
                    background:none ;
                    border-bottom: 1px solid $white;
                }
                input{
                    height: 40px;
                    color: $white;
                }
                textarea{
                    padding: 7px;
                    height: 200px;
                    color: $white;
                }
                input::placeholder,textarea::placeholder{
                    color: $white;
                }
              }
          }
      }
  }
</style>