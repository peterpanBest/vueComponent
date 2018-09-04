<template>
    <div class="box">
        <div class="container">
            <el-card class="box-card">
                <div class="header">
                    <span class="header-logo"><img src="../../assets/image/logo.png" alt=""></span>
                </div>
                <h6 class="title">
                    <span class="title-span">Login with Baidu</span>
                </h6>
                <el-form status-icon ref="ruleForm2" class="demo-ruleForm">
                    <div class="inputs">
                        <div class="inputs-div">
                            <span class="input-labe el-icon-news"></span>
                            <input type="text" class="username">
                        </div>
                        <div class="inputs-div inputs-paw">
                            <span class="input-labe el-icon-bell"></span>
                            <input type="password" class="password">
                        </div>
                    </div>
                    <el-form-item>
                        <label for="remChk" class="checkLabel">
                            <span class="remChkBox">
                                <span class="remChkBoxIn"></span>
                                <input type="checkbox" id="remChk" class="remChk">
                            </span>
                            <span class="checkTitle">Remember</span>
                        </label>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width:100%;height:50px;font-weight:450;font-szie:19px;"><i class="el-icon-news" style="font-size:18px;padding-right:10px;"></i>Login</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>   
    </div> 
</template>

<script>
    export default {
        name: "LoginP365",
        data() {
            return {
                checked: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box{
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #F3F3F3;
    }
    @mixin publicLogo {
        display: block;
        width: 250px;
        height: 55px;
    }

    @mixin publicInput{
        width: 100%;
        height: 35px;
        padding: 5px 0;
        font-size: 18px;
        border: none;
        padding-left: 50px;
    }

    @mixin hauto{
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    @mixin inputLabe{
        display: block;
        width: 35px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        float: left;
        position: absolute;
        top: 50%;
        left: 25px;
        transform: translate(-50%,-50%);
        overflow: hidden;
    }

    .container{
        width: 470px;
        height: 395px;
        position: absolute;
        left: 50%;
        top: 47%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05);
    }

    .header{
        width: 100%;
        height: hauto;
        overflow: hidden;
    }

    .header-logo{
        @include publicLogo;
        margin: 0 auto;
        overflow: hidden;
        margin-bottom: 10px;
    }

    .header-logo img{
        @include publicLogo;
    }

    .title{
        width: 100%;
        height: 20px;
        position: relative;
    }

    .title:after{
        position: absolute;
        content: '';
        bottom: 0;
        left: -50%;
        right: -50%;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        border-bottom: 1px solid #c0c0c0;
    }

    .title-span{
        font-weight: 500; 
        display: inline-block;
        width: 160px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding-top: 2px;
        background-color: white;
        z-index: 99;
        color: #818a91;
        font-size: 14px;
    }
    
    .inputs{
        width: 100%;
        height: auto;
        overflow: hidden;
        border: 1px solid #c0c0c0;
        margin-bottom: 20px;
        border-radius: 2px; 
        margin-top: 60px;
    }

    .inputs-div{
        @include hauto;
        position: relative;
    }

    .username{
        @include publicInput;
    }

    .password{
        @include publicInput;
    }

    .input-labe{
        @include inputLabe;
    }

    .inputs-paw{
        border-top: 1px solid #c0c0c0;
    }

    .remChkBox{
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;

    }

    .checkLabel{
        color: #606266;
        font-weight: 500;
        font-size: 14px;
        position: relative;
        cursor: pointer;
        display: inline-block;
        white-space: nowrap;
        user-select: none;
    }

    .remChkBoxIn{
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #fff;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
    }

    .remChk{
        opacity: 0;
        outline: none;
        position: absolute;
        margin: 0;
        width: 0;
        height: 0;
        z-index: -1 
    }

    .checkTitle{
        display: inline-block;
        padding-left: 10px;
        line-height: 19px;
        font-size: 14px;
    }
</style>
