import bgDefault from '../images/bg_default.jpg';

export function createUser(user) {
  !user.bgImg && (user.bgImg = bgDefault);
  return {
    name: user.name,   //用户名
    bgImg: user.bgImg,      //背景图
    /*
        courseData:{        //  单词的学习进度
          0:{               //  课程id
            state:0,        //  复习进度
            date:2019-01-02 //  最后一次复习日期
            complete:[]     //  已完成的单词id
          }
        }
    */
  };
}