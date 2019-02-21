<template>
    <div class="activity-detail">
        <card-full :data="item" v-for="(item,index) in detail.banner" :key="index">
            <div slot="icons">
                <div class="icons">
                    <icon className="white collection" :count="item.collection_count"/>
                    <icon className="white view" :count="item.view_count"/>
                </div>
            </div>
        </card-full>
        <!--//End-->
        <div class="flags">
            <div class="item time"><span>2019年01月20日</span></div>
            <div class="item address"><span>北京市东城区汉威大厦15层</span></div>
            <div class="item price"><span>￥123</span></div>
        </div>
        <!--//End-->

        <div class="content" style="height: 200px;background:#eee;" v-html="detail.content"></div>
        <!--//End 富文本-->

        <div class="handle-icons">
            <icon className="gray share"/>
            <icon className="gray view" :count="'1111'"/>
            <icon className="gray collection" :count="'1'"/>
        </div>
        <!--//End-->

        <div class="wonderful">
            <div class="title">更多精彩活动</div>
            <ul>
                <router-link tag="li" :to="{path:'/find/activity/'+item.id}" class="item"
                             v-for="(item,index) in detail.wonderful" :key="index">
                    <img class="pic" :src="item.picUrl" alt="">
                    <div class="info">
                        <p class="desc">{{item.desc}}</p>
                        <p class="time">{{item.time}}</p>
                    </div>
                </router-link>
            </ul>
        </div>
        <!--//End 更多精彩活动-->

        <div class="foot-btn">
            <span>我要报名</span>
        </div>
        <!--//End 底部-->

    </div>
</template>

<script>
  import Icon from "./../../components/icons/Icon";
  import CardFull from "../../components/card/Full";

  export default {
    name: "FindActivityDetail",
    data() {
      return {
        detail: {
          content: "我是富文本我是富文本我是富文本我是富文本我是富文本",
          banner: [
            {
              picUrl: "/static/pics/home/beautiful.jpg",
              title: "我是标题文字啊啊啊啊啊",
              subTitle: "我是副标题文字啊大大多所",
              collection_count: 111,
              view_count: 2222
            }
          ],
          wonderful: [
            {
              id:1,
              picUrl: "/static/images/default/default-thumb.png",
              desc: "的卡萨红框的哈哈的卡号刷的卡还是看电话卡还贷款和卡号是的卡号的",
              time: "2019年01月20日"
            },
            {
              id:2,
              picUrl: "/static/images/default/default-thumb.png",
              desc: "的卡萨红框的哈哈的卡号刷的卡还是看电话卡还贷款和卡号是的卡号的",
              time: "2019年01月20日"
            },
            {
              id:3,
              picUrl: "/static/images/default/default-thumb.png",
              desc: "的卡萨红框的哈哈的卡号刷的卡还是看电话卡还贷款和卡号是的卡号的",
              time: "2019年01月20日"
            }
          ]
        }

      };
    },
    components: {
      Icon,
      CardFull
    }
  };
</script>

<style lang="less">
    @import "../../assets/less/details/activity.less";
</style>
