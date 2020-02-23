<template>
  <div class="login-form-wrapper flex-ct-x">
    <form class="login-form">
      <h3>注册</h3>
      <div class="account">
        <input
          type="text"
          placeholder="请输入手机或邮箱"
          pattern="^1[3456789]\d{9}$|^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$"
          maxlength="50"
          required
        />
        <img :src="greeting" alt="greeting" />
      </div>
      <div class="password">
        <input
          type="password"
          placeholder="请输入密码(6到20位字符)"
          pattern="^[\dA-Za-z_]{6,20}$"
          required
        />
        <img :src="blindfold" alt="blindfold" />
      </div>
      <div class="code">
        <input
          type="text"
          placeholder="请输入邀请码(6位数字)"
          pattern="^[\d]{6}$"
          maxlength="6"
          required
        />
        <button type="button">获取</button>
        <img :src="greeting" alt="greeting" />
      </div>
      <img :src="normal" alt="normal" />
      <ul>
        <li>
          <input type="radio" name="sex" id="male" />
          <label for="male">Boy</label>
        </li>
        <li>
          <input type="radio" name="sex" id="female" />
          <label for="female">Girl</label>
        </li>
      </ul>
      <button>注册</button>
    </form>
  </div>
</template>

<script>
import normal from "@/images/normal.png";
import greeting from "@/images/greeting.png";
import blindfold from "@/images/blindfold.png";
export default {
  data() {
    return {
      normal,
      greeting,
      blindfold
    };
  }
};
</script>

<style lang="scss" scoped>
.login-form-wrapper {
  min-height: 450px;
  background-color: $description-color;
}
.login-form {
  position: relative;
  width: 320px;
  padding: 25px;
  margin-top: 50px;
  border-radius: 2px;
  background-color: white;
  h3 {
    font-size: 16px;
    color: $text-color;
    font-weight: bold;
  }
  img {
    position: absolute;
    left: 50%;
    bottom: 100%;
    width: 120px;
    margin: 0 0 -20px -60px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    li {
      position: relative;
      width: 45%;
      height: 36px;
      transition: all 300ms;
      &:focus-within {
        background: linear-gradient(90deg, $primary-color 50%, transparent 0)
            repeat-x,
          linear-gradient(90deg, $primary-color 50%, transparent 0) repeat-x,
          linear-gradient(0deg, $primary-color 50%, transparent 0) repeat-y,
          linear-gradient(0deg, $primary-color 50%, transparent 0) repeat-y;
        background-position: 0 0, 0 100%, 0 0, 100% 0;
        background-size: 8px 1px, 8px 1px, 1px 8px, 1px 8px;
        animation: move 500ms infinite linear;
      }
    }
  }
  div {
    margin-top: 10px;
  }
  input[type="text"],
  input[type="password"] {
    padding: 10px;
    outline: none;
    border: 1px solid #e9e9e9;
    border-radius: 2px;
    width: 100%;
    height: 40px;
    transition: all 300ms;
    &:focus:valid {
      border-color: $primary-color;
    }
    &:focus:invalid {
      border-color: red;
    }
  }
  input[type="radio"] {
    position: absolute;
    width: 0;
    height: 0;
    &:checked + label {
      border: 3px solid transparent;
      background-color: $primary-color;
      color: #fff;
    }
  }
  label {
    display: block;
    border-bottom: 1px solid #ccc;
    width: 100%;
    background-clip: padding-box;
    cursor: pointer;
    text-align: center;
    transition: all 300ms;
  }
  button {
    overflow: hidden;
    margin-top: 10px;
    outline: none;
    border: none;
    border-radius: 2px;
    width: 100%;
    height: 40px;
    background-color: $primary-color;
    cursor: pointer;
    color: #fff;
    transition: all 300ms;
  }
}
.account,
.password,
.code {
  img {
    display: none;
    margin-bottom: -27px;
  }
  &:focus-within {
    img {
      display: block;
    }
    & ~ img {
      display: none;
    }
  }
}
.code {
  display: flex;
  justify-content: space-between;
  button {
    margin-top: 0;
  }
  input {
    &:not(:placeholder-shown) {
      width: 70%;
      & + button {
        width: 25%;
      }
    }
    &:placeholder-shown {
      width: 100%;
      & + button {
        width: 0;
        opacity: 0;
      }
    }
  }
}
@keyframes move {
  to {
    background-position: 6% 0, -6% 100%, 0 -6%, 100% 6%;
  }
}
</style>