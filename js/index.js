$(function () {
    $(".left-Centerbox-head>div").click(function () {
        $(this).addClass('colorBLUE').siblings().removeClass('colorBLUE')
    })
    // 设备监控

    Piedot()
    function Piedot() {
        var myChart = echarts.init(document.querySelector('.left-downbox-pic'));
        var option = {
            //   backgroundColor: '#2c343c',

            title: {
                //   text: 'Customized Pie',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },

            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['10%', '70%'],
                    // center: ['500%', '10%'],
                    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
                    data: [
                        { value: 20, name: '云南' },
                        { value: 26, name: '北京' },
                        { value: 24, name: '山东' },
                        { value: 25, name: '河北' },
                        { value: 20, name: '江苏' },
                        { value: 25, name: '浙江' },
                        { value: 30, name: '四川' },
                        { value: 42, name: '湖北' }
                    ],
                    roseType: 'radius',
                    labelLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 2
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };
        myChart.setOption(option)
    };
    // 饼图

    orderNum()
    function orderNum() {
        const list = [
            ['20,301,987', '99834'],
            ['301,987', '9834'],
            ['1,987', '3834'],
            ['987', '834']
        ]
        let index = 0;
        let timeId = 0;
        dayDiv();
        timeBegin();
        $(".rmian-top-hand div").click(function () {
            index = $(this).index(".rmian-top-hand div");
            dayDiv();
            clearInterval(timeId);
            timeBegin();
        })
        // 计时器封装
        function timeBegin() {
            timeId = setInterval(function () {
                index++;

                if (index >= list.length) {
                    index = 0
                }
                dayDiv()
            }, 2000)
        }

        function dayDiv() {
            $(".rmian-top-hand div").eq(index).addClass("active").siblings().removeClass("active");
            $(".rmian-content-up>div").eq(0).text(list[index][0])
            $(".rmian-content-down>div").eq(0).text(list[index][1])
        }
        // function orderNum() {
        //     // let index = 0;
        //     // let timeId;
        //     // const list = [
        //     //     ['20,301,987', '99834'],
        //     //     ['301,987', '9834'],
        //     //     ['1,987', '3834'],
        //     //     ['987', '834']
        //     // ]

        //     // $(".rmian-top-hand div").eq(index).addClass("active").siblings().removeClass("active")
        //     // $(".rmian-content-up>div").eq(0).text(list[index][0])
        //     // $(".rmian-content-down>div").eq(0).text(list[index][1])
        //     // timeId = setInterval(() => {
        //     //     index++;
        //     //     if (index >= list.length) {
        //     //         index = 0;
        //     //     }
        //     //     $(".rmian-top-hand div").eq(index).addClass("active").siblings().removeClass("active")
        //     //     $(".rmian-content-up>div").eq(0).text(list[index][0])
        //     //     $(".rmian-content-down>div").eq(0).text(list[index][1])
        //     // }, 2000);
        //     // $(".rmian-top-hand div").click(function(){
        //     //     // console.log($(this).index(".rmian-top-hand div"));
        //     //     index = $(this).index(".rmian-top-hand div")
        //     //     $(".rmian-top-hand div").eq(index).addClass("active").siblings().removeClass("active")
        //     //     $(".rmian-content-up>div").eq(0).text(list[index][0])
        //     //     $(".rmian-content-down>div").eq(0).text(list[index][1])
        //     //     clearInterval(timeId);
        //     //     timeId = setInterval(() => {
        //     //         index++;
        //     //         if (index >= list.length) {
        //     //             index = 0;
        //     //         }
        //     //         $(".rmian-top-hand div").eq(index).addClass("active").siblings().removeClass("active")
        //     //         $(".rmian-content-up>div").eq(0).text(list[index][0])
        //     //         $(".rmian-content-down>div").eq(0).text(list[index][1])
        //     //     }, 2000);
        //     })
        // }
    }
    // 订单轮播

    linedot()
    function linedot() {
        let index = 0;
        let list = [
            [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            [
                [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
                [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            [
                [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            [
                [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
        ];
        let timeId = 0;
        year()
        timeId = setInterval(function () {
            index++
            if (index >= list.length) {
                index = 0
            }
            year()
        }, 2000)
        $(".right_main-statistics-head div").click(function(){
            index = $(this).index(".right_main-statistics-head div")
            year()
            clearInterval(timeId);
            timeId = setInterval(function () {
                index++
                if (index >= list.length) {
                    index = 0
                }
                year()
            }, 2000)
        })
        function year(){
            $(".right_main-statistics-head div").eq(index).addClass("active").siblings().removeClass("active")
            biaopic(list[index][0], list[index][1])
        }
        function biaopic(one, two) {
            var myChart = echarts.init(document.querySelector('.right_main-statistics-pic'));
            var option = {
                legend: {
                    data: ['预期销售额', '实际销售额'],
                    itemHeight: 10,
                    itemWidth: 20,
                    left: '40%',
                    textStyle: {
                        color: '#4a97f8',
                        fontSize: 10
                    }
                },
                grid: {
                    left: 0,
                    right: 0,
                    top: '18%',
                    bottom: 0,
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    axisLabel: {
                        color: '#4a97f8',
                        interval: 0
                    },
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        color: '#4a97f8',

                    },
                    splitLine: {
                        lineStyle: {
                            color: ['#468fec'],
                        }
                    }
                },
                series: [{
                    name: '预期销售额',
                    data: one,
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        color: '#f50103'
                    },
                },
                {
                    name: '实际销售额',
                    data: two,
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        color: '#00e3e8'
                    },
                }
                ]
            };
            myChart.setOption(option);
        }
    }
    //销售额统计
})