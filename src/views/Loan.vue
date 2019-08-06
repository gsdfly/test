<template>
    <div class="loan">
        <div class="tip" v-show="!activeOption">
            <div>
                <i class="warning"></i>
                <p>同时申请3款以上产品，下款率可达90%以上</p>
            </div>
            <i class="close"></i>
        </div>
        <div class="filter">
            <div class="search">
              <div class="content">
                  <i class="search-icon"></i>
                  <p>输入搜索内容</p>
              </div>
            </div>
           <ul class="options">
               <li :class="{'active':activeOption==='type'}" @click="changeTypes('type')">
                   <p>类型</p>
               </li>
               <li>
                   <p>额度</p>
               </li>
               <li>
                   <p>周期</p>
               </li>
               <li>
                   <p>排序</p>
               </li>
           </ul>
            <div class="list">
                <ul>
                    <li :class="{'active':index===activeListIndex}" :key="index" v-for="(item,index) in list" @click="activeListIndex=index">{{item}}</li>
                    <li></li>
                </ul>
            </div>
        </div>

        <div class="main" :class="{'active':activeOption}">
            <div class="item">
                <div class="novice">
                    新手专属
                </div>
                <div class="top">
                    <div class="left">
                        <img class="img" src="./../assets/imgs/loan/icon1.png" alt="">
                        <div>
                            <h3>小花钱包<span>额度高</span></h3>
                            <p>随借随还，方便灵活</p>
                        </div>
                    </div>
                    <div class="right">4.4万人已申请</div>
                </div>
                <div class="bottom">
                    <div class="left">
                        <div class="money">
                            <h4>5000-2万</h4>
                            <p>额度范围(元)</p>
                        </div>
                        <div class="line"></div>
                        <div class="interest">
                            <h5>月利息：2.3%</h5>
                            <p>还款周期：1-36个月</p>
                        </div>
                    </div>
                    <div class="right">
                        <button>立即申请</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="top">
                    <div class="left">
                        <img class="img" src="./../assets/imgs/loan/icon2.png" alt="">
                        <div>
                            <h3>小花钱包<span>额度高</span></h3>
                            <p>随借随还，方便灵活</p>
                        </div>
                    </div>
                    <div class="right">4.4万人已申请</div>
                </div>
                <div class="bottom">
                    <div class="left">
                        <div class="money">
                            <h4>5000-2万</h4>
                            <p>额度范围(元)</p>
                        </div>
                        <div class="line"></div>
                        <div class="interest">
                            <h5>月利息：2.3%</h5>
                            <p>还款周期：1-36个月</p>
                        </div>
                    </div>
                    <div class="right">
                        <button>立即申请</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="top">
                    <div class="left">
                        <img class="img" src="./../assets/imgs/loan/icon3.png" alt="">
                        <div>
                            <h3>小花钱包<span>额度高</span></h3>
                            <p>随借随还，方便灵活</p>
                        </div>
                    </div>
                    <div class="right">4.4万人已申请</div>
                </div>
                <div class="bottom">
                    <div class="left">
                        <div class="money">
                            <h4>5000-2万</h4>
                            <p>额度范围(元)</p>
                        </div>
                        <div class="line"></div>
                        <div class="interest">
                            <h5>月利息：2.3%</h5>
                            <p>还款周期：1-36个月</p>
                        </div>
                    </div>
                    <div class="right">
                        <button>立即申请</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="top">
                    <div class="left">
                        <img class="img" src="./../assets/imgs/loan/icon4.png" alt="">
                        <div>
                            <h3>小花钱包<span>额度高</span></h3>
                            <p>随借随还，方便灵活</p>
                        </div>
                    </div>
                    <div class="right">4.4万人已申请</div>
                </div>
                <div class="bottom">
                    <div class="left">
                        <div class="money">
                            <h4>5000-2万</h4>
                            <p>额度范围(元)</p>
                        </div>
                        <div class="line"></div>
                        <div class="interest">
                            <h5>月利息：2.3%</h5>
                            <p>还款周期：1-36个月</p>
                        </div>
                    </div>
                    <div class="right">
                        <button>立即申请</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="top">
                    <div class="left">
                        <img class="img" src="./../assets/imgs/loan/icon1.png" alt="">
                        <div>
                            <h3>小花钱包<span>额度高</span></h3>
                            <p>随借随还，方便灵活</p>
                        </div>
                    </div>
                    <div class="right">4.4万人已申请</div>
                </div>
                <div class="bottom">
                    <div class="left">
                        <div class="money">
                            <h4>5000-2万</h4>
                            <p>额度范围(元)</p>
                        </div>
                        <div class="line"></div>
                        <div class="interest">
                            <h5>月利息：2.3%</h5>
                            <p>还款周期：1-36个月</p>
                        </div>
                    </div>
                    <div class="right">
                        <button>立即申请</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="types" v-if="activeOption==='type'" @click="activeOption=''">
            <ul @click.stop="">
                <li v-for="(item,index) in types" :class="{'active':activeTypesIndex===index}" @click="changeTypesIndex(index)">{{item}}</li>
                <!--<li>最新上架</li>-->
                <!--<li>通过率高</li>-->
                <!--<li class="active">申请人数</li>-->
                <!--<li>平均金额</li>-->
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Loan",
        data(){
            return{
                search:'',
                list:['本周放款王','手机号贷','身份证贷','信用卡贷','信用卡贷'],
                activeListIndex:2,
                activeOption:'',
                types:['最新上架','通过率高','申请人数','平均金额'],
                activeTypesIndex:2
            }
        },
        methods:{
            changeTypes(type){
                if(type===this.activeOption){
                    this.activeOption = '';
                }else {
                    this.activeOption = type;
                }
            },
            changeTypesIndex(index){
                this.activeTypesIndex = index;
                this.activeOption = '';
            }
        }
    }
</script>

<style lang="scss" scoped>


    @mixin min-device-pixel-ratio($scale2, $scale3) {
        @media screen and (min-device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2) {
            transform: $scale2;
        }
        @media screen and (min-device-pixel-ratio: 3), (-webkit-min-device-pixel-ratio: 3) {
            transform: $scale3;
        }
    }
    @mixin border-top-1px($color) {
        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            border-top: 2px solid $color;
            transform-origin: 0 0;
            @include min-device-pixel-ratio(scaleY(.5), scaleY(.33));
        }
    }

    .loan{
        width: 100%;
        height: 100%;
        background: #f6f6f6;
        overflow: hidden;
        padding: 0 0 98px 0;
         .tip{
            width:100%;
            height:68px;
            background:rgba(255,237,204,1);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 30px;
            >div{
                display: flex;
            }
            i{
                width: 32px;
                height: 32px;
                &.warning{
                    background: url("./../assets/imgs/loan/icon_hint@2x.png") no-repeat;
                    background-size: 100% 100%;
                }
                &.close{
                    background: url("./../assets/imgs/loan/icon_close@2x.png") no-repeat;
                    background-size: 100% 100%;
                }
            }
            p{
                font-size:24px;
                font-weight:500;
                color:rgba(231,130,27,1);
                line-height:34px;
                margin: 0 0 0 20px;
            }
        }
        .filter{
            width: 100%;
            padding: 0 0 16px 0;
            background: #fff;
            margin: 0 0 20px 0;
            .search{
                width: 100%;
                height: 100px;
                padding: 14px 30px;
                .content{
                    width:100%;
                    height: 100%;
                    background:rgba(0,0,0,0.052300000000000006);
                    border-radius:8px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 auto;
                    .search-icon{
                        width: 32px;
                        height: 32px;
                        background: url("./../assets/imgs/loan/search_icon@2x.png") no-repeat;
                        background-size: 100% 100%;
                    }
                    p{
                        font-size:26px;
                        color:rgba(187,187,187,1);
                        line-height:36px;
                        margin: 0 0 0 12px;
                    }
                }
            }
            .options{
                margin: 0 0 16px 0;
                height: 80px;
                padding: 24px 46px;
                display: flex;
                justify-content: space-between;
                li{
                    p{
                        font-size:28px;
                        font-weight:400;
                        color:rgba(100,112,125,1);
                        line-height:40px;
                        position: relative;
                        padding: 0 38px 0 0;
                        &::after{
                            content: '';
                            width: 28px;
                            height: 28px;
                            background: url("./../assets/imgs/loan/option_2@2x.png");
                            background-size: 100% 100%;
                            position: absolute;
                            right: 0;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                    }
                    &.active{
                        p{
                            &::after{
                                content: '';
                                width: 28px;
                                height: 28px;
                                background: url("./../assets/imgs/loan/option_1@2x.png");
                                background-size: 100% 100%;
                                position: absolute;
                                right: 0;
                                top: 50%;
                                transform: translateY(-50%);
                            }
                        }
                    }
                }
            }
            .list{
                width: 100%;
                overflow-x: scroll;
                padding:  0 30px;
                ul{
                    display: flex;
                    flex-wrap: nowrap;
                    li{
                        padding: 8px 16px;
                        height:56px;
                        background:rgba(242,242,242,1);
                        border-radius:4px;
                        font-size:28px;
                        color:rgba(198,198,198,1);
                        line-height:40px;
                        text-align: center;
                        flex-shrink: 0;
                        margin: 0 20px 0 0;
                        &.active{
                            background:linear-gradient(90deg,rgba(249,97,84,1) 0%,rgba(247,130,98,1) 100%);
                            color: #fff;
                        }
                        &:last-of-type{
                            width: 10px;
                            opacity: 0;
                            padding: 0;
                        }
                    }
                }
            }
        }
        .main{
            width: 100%;
            height: calc(100% - 356px);
            overflow-y: scroll;
            background: #f6f6f6;
            &.active{
                height: calc(100% - 288px);
            }
            .item{
                width:750px;
                height:278px;
                background:rgba(255,255,255,1);
                margin: 0 0 2px 0;
                padding: 0 30px;
                position: relative;
              //  @include border-top-1px(#f6f6f6);
                .novice{
                    position: absolute;
                    width:136px;
                    height:56px;
                    background:linear-gradient(135deg,rgba(48,49,52,1) 0%,rgba(85,86,93,1) 56%,rgba(11,11,11,1) 100%);
                    border-radius:0px 0px 0px 16px;
                    /*text-align: center;*/
                    /*line-height: 56px;*/
                    right: 0;
                    top: 0;
                    font-size:24px;
                    line-height: 24px;
                    color:rgba(247,217,186,1);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .top{
                    display: flex;
                    padding: 38px 0 0 0;
                    justify-content: space-between;
                    .left{
                        display: flex;
                        .img{
                            width: 84px;
                            height: 84px;
                        }
                        >div{
                            margin:  0 0 0 20px;
                            h3{
                                font-size:32px;
                                font-weight:500;
                                color:rgba(94,94,94,1);
                                line-height:44px;
                                display: flex;
                                align-items: center;
                                span{
                                    width:88px;
                                    height:36px;
                                    background:rgba(255,114,48,0.15);
                                    border-radius:4px;
                                    color: #FF7230;
                                    text-align: center;
                                    line-height: 36px;
                                    font-size: 20px;
                                    margin: 0 0 0 20px;
                                }
                            }
                            p{
                                font-size:24px;
                                color:rgba(167,170,178,1);
                                line-height:34px;
                                margin: 6px 0 0 0;
                            }
                        }
                    }
                    .right{
                        align-self: flex-end;
                        font-size:24px;
                        color:rgba(250,81,81,1);
                        line-height:34px;
                    }
                }
                .bottom{
                    padding: 30px 0 0 0;
                    display: flex;
                    justify-content: space-between;
                    .left{
                        display: flex;
                        p{
                            font-size:24px;
                            color:rgba(167,170,178,1);
                            line-height:34px;
                            margin: 6px 0 0 0;
                        }
                        .money{
                            h4{
                                font-family:Lato-Regular;
                                font-size:48px;
                                color:rgba(250,81,81,1);
                                line-height:48px;
                            }

                        }
                        .line{
                            width:4px;
                            height:72px;
                            background: #F1F1F1;
                            margin: 6px 28px 0 28px;
                            //@include min-device-pixel-ratio(scaleX(.5), scaleX(.33))
                        }
                        .interest{
                            h5{
                                font-size:28px;
                                color:rgba(89,104,128,1);
                                line-height:40px;
                                margin: 10px 0 4px 0;
                            }
                            p{
                                margin: 0;
                            }
                        }

                    }
                    .right{
                        padding: 12px 0 0 0;
                        button{
                            outline: none;
                            border: none;
                            width:148px;
                            height:64px;
                            background:linear-gradient(90deg,rgba(249,97,84,1) 0%,rgba(247,130,98,1) 100%);
                            box-shadow:0px 4px 14px 0px rgba(255,114,48,0.5);
                            border-radius:32px;
                            font-size: 22px;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
    .types{
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.4);
        left: 0;
        top: 180px;
        z-index: 2;
        ul{
            display: flex;
            padding: 60px 40px;
            align-self: center;
            justify-content: space-between;
            background: #fff;
            border-top: 2px solid #f6f6f6;
            li{
                width: 144px;
                height: 56px;
                background:rgba(255,255,255,1);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius:4px;
                border:2px solid rgba(204,204,204,1);
                font-size:28px;
                font-weight:400;
                color:rgba(204,204,204,1);
                line-height:1;
                &.active{
                    background:linear-gradient(90deg,rgba(249,97,84,1) 0%,rgba(247,130,98,1) 100%);
                    border-radius:4px;
                    border: none;
                    color: #fff;
                }
            }
        }
    }
</style>