<template>
    <div class="tabBar" >
        <ul>
            <li>
                <span class="icon home"></span>
                <p>首页</p>
            </li>
            <li class="active">
                <span class="icon loan"></span>
                <p>贷款大全</p>
            </li>
            <li>
                <span class="icon quality"></span>
                <p>优质贷款</p>
            </li>
            <li>
                <span class="icon my"></span>
                <p>我的</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style lang="scss" scoped>

.tabBar{
    width: 100%;
    height:98px;
    background:rgba(255,255,255,1);
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 2px solid #f6f6f6;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        li{
            width: 96px;
            height: 100%;
            font-size: 20px;
            .icon{
                width: 68px;
                height: 68px;
                display: block;
                margin: 0 auto;
                background: pink;
                &.home{
                    background: url("./../assets/imgs/tabbar/hone／icon_1_2@2x.png") no-repeat;
                    background-size: 100% 100%;
                }
                &.loan{
                    background: url("./../assets/imgs/tabbar/hone／icon_2_2@2x.png") no-repeat;
                    background-size: 100% 100%;
                }
                &.quality{
                    background: url("./../assets/imgs/tabbar/hone／icon_3_2@2x.png") no-repeat;
                    background-size: 100% 100%;
                }
                &.my{
                    background: url("./../assets/imgs/tabbar/hone／icon_4_2@2x.png") no-repeat;
                    background-size: 100% 100%;
                }
            }
            p{
                text-align: center;
                font-size: 20px;
                line-height: 24px;
                color:#A5A5A5;
            }
            &.active{
                .icon{
                    &.home{
                        background: url("./../assets/imgs/tabbar/hone／icon_1_2@2x.png") no-repeat;
                        background-size: 100% 100%;
                    }
                    &.loan{
                        background: url("./../assets/imgs/tabbar/hone／icon_2_2@2x.png") no-repeat;
                        background-size: 100% 100%;
                    }
                    &.quality{
                        background: url("./../assets/imgs/tabbar/hone／icon_3_2@2x.png") no-repeat;
                        background-size: 100% 100%;
                    }
                    &.my{
                        background: url("./../assets/imgs/tabbar/hone／icon_4_2@2x.png") no-repeat;
                        background-size: 100% 100%;
                    }
                }
                p{
                    color:#FA5151;
                }
            }

        }
    }
}
</style>