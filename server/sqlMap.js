var sqlMap = {
  // 营业厅日通报数据
  businessDay: {
    spNewAdd: 'call sp_business_new_add_day(?,?,?)',
    newAdd:'select * from businessnewaddold  where date=? order by id',
    spBtz:'call sp_business_btz_day(?,?,?)',
    btz:'select * from businessbtzold  where date=? order by id',
    checkDate:'select count(1) as data from businessnewaddold where date=? order by id '
  },
  echartsData:{
    myDate:`SELECT   distinct date    from new_number where d_month=? ORDER BY date`,
    channelNewAddTop10:`SELECT channel_name,count(distinct number) as xz from new_number
             where busi_name like '%GSM开户新装%'
						 and date=?
             and flag=1
						 and channel_name in (select channel_name from channel_info)
             group by channel_name
						 ORDER BY xz desc limit 10;`,
    channelBtzTop10:`SELECT channel_name,count(distinct number) as btz
          from baotizhaun_number
          where (busi_name like '%移动4G任我用（2018版）%' or busi_name like '%48元全国不限量促销%')
          and flag=1
					and date=?
					 and channel_name in (select channel_name from channel_info)
          and number not in(
          select distinct number from new_number
          where busi_name like '%GSM开户新装%'
          and flag=1
					and date=?
          )
          group by channel_name
				  ORDER BY btz desc limit 10;`,
    channelNewAddTop10M:`SELECT channel_name,count(distinct number) as xz from new_number
             where busi_name like '%GSM开户新装%'
						 and d_month=?
             and flag=1
						 and channel_name in (select channel_name from channel_info)
             group by channel_name
						 ORDER BY xz desc limit 10;`,
    channelBtzTop10M:`SELECT channel_name,count(distinct number) as btz
          from baotizhaun_number
          where (busi_name like '%移动4G任我用（2018版）%' or busi_name like '%48元全国不限量促销%')
          and flag=1
					and d_month=?
					and channel_name in (select channel_name from channel_info)
          and number not in(
          select distinct number from new_number
          where busi_name like '%GSM开户新装%'
          and flag=1
					and d_month=?
          )
          group by channel_name
				  ORDER BY btz desc limit 10;`,
    newAdd:`SELECT date,count(distinct number) as xz from new_number
             where busi_name like '%GSM开户新装%'
             and d_month=?
             and flag=1
             group by date
             order by date;`,
    btz:`SELECT date,count(distinct number) as btz
          from baotizhaun_number
          where (busi_name like '%移动4G任我用（2018版）%' or busi_name like '%48元全国不限量促销%')
          and flag=1
          and d_month=?
          and number not in(
          select distinct number from new_number
          where busi_name like '%GSM开户新装%'
          and flag=1
          and d_month=?
          )
          group by date;`,
    newAddBusiness:`SELECT date,count(distinct number) as xz
               from new_number
               where busi_name like '%GSM开户新装%'
               and d_month=?
               and flag=1
               and channel_name in (
               select yyt_name from yyt_info
               )
               group by date
               order by date;`,
    btzBusiness:`SELECT date,count(distinct number) as btz
          from baotizhaun_number
          where (busi_name like '%移动4G任我用（2018版）%' or busi_name like '%48元全国不限量促销%')
          and flag=1
          and d_month=?
          and number not in(
          select distinct number from new_number
          where busi_name like '%GSM开户新装%'
          and flag=1
          and d_month=?
          )
          and channel_name in(SELECT yyt_name from yyt_info)
          group by date`,
    newAddChannel:`SELECT date,count(distinct number) as xz
              from new_number
              where busi_name like '%GSM开户新装%'
              and d_month=?
              and flag=1
              and channel_name in (
              select channel_name from channel_info
              )
              group by date
              order by date;`,
    btzChannel:`SELECT date,count(distinct number) as btz
       from baotizhaun_number
       where (busi_name like '%移动4G任我用（2018版）%' or busi_name like '%48元全国不限量促销%')
       and flag=1
       and d_month=?
       and number not in(
       select distinct number from new_number
       where busi_name like '%GSM开户新装%'
       and flag=1
       and d_month=?
       )
       and channel_name in(SELECT channel_name from channel_info)
       group by date`,
    btzBusinessEvery:`select yyt_name, date,ifnull(xz,'0') as btz
             from yyt_info a
             left join 
             (SELECT channel_name,date,count(distinct number) as xz
             from baotizhaun_number
             where (busi_name like '%移动4G任我用（2018版）%' or busi_name like '%48元全国不限量促销%')
             and flag=1
             and d_month=?
             and number not in(
             select distinct number from new_number
             where busi_name like '%GSM开户新装%'
             and flag=1
             and d_month=?
             )
             group by channel_name,date
             ) b on a.yyt_name=b.channel_name
             order by channel_name,date`,
    newAddBusinessEvery:`SELECT date,channel_name,count(distinct number) as xz
         from new_number
         where busi_name like '%GSM开户新装%'
         and d_month=?
         and flag=1
         and channel_name in (
         select yyt_name from yyt_info
         )
         group by date,channel_name
         order by channel_name,date ;`,
    newAddMangerEvery:`SELECT manger_name,date,IFNULL(xz,'0') as xz from channel_manger  a LEFT JOIN 
            (SELECT manger, date,count(distinct a.number)  as xz
            from new_number a,channel_info b
            where busi_name like '%GSM开户新装%'
            and a.channel_name=b.channel_name
            and flag=1
            and d_month=?
            group by manger, date
            ) ff on a.manger_name=ff.manger order by manger,date`,
    btzChannelEvery:`SELECT manger_name,date,IFNULL(btz,'0') as btz from channel_manger  a LEFT JOIN 
        (SELECT manger,date,count(distinct a.number)  as btz
        from baotizhaun_number a,channel_info b
        where (busi_name like '%移动4G任我用（2018版）%' or busi_name like '%48元全国不限量促销%')
        and flag=1
        and d_month=?
        and a.number not in(
        select distinct number from new_number
        where busi_name like '%GSM开户新装%'
        and flag=1
        and d_month=?
        )
        and a.channel_name=b.channel_name
        group by manger,date) ff on a.manger_name=ff.manger order by manger,date`
  },

  channelDay: {
    spNewAdd: 'call sp_channel_new_add_day(?,?,?)',
    newTest:'select count(1) from channelnewaddold  where date=?',
    newAdd:'select * from channelnewaddold  where date=? order by id',
    spBtz:'call sp_channel_btz_day(?,?,?)',
    btz:'select * from channelbtzold  where date=? order by id'
  },
  selfDay:{
    spNewAdd: 'call self_new_add_day(?,?)',
    spBtz:'call self_btz_day(?,?)',
    community:`select 
           a.self_name, 
           a.ration_month ration_month_btz,
           a.ration_day ration_day_btz,
           a.finish_day finish_day_btz,
           a.finish_month finish_month_btz,
           a.target_day  target_day_btz,
           a.target_month target_month_btz,
           b.ration_month ration_month_xz,
           b.ration_day ration_day_xz,
           b.finish_day finish_day_xz,
           b.finish_month finish_month_xz,
           b.target_day  target_day_xz,
           b.target_month target_month_xz
           from selfbtzold a,
                selfnewaddold b
           where a.self_name=b.self_name
           and a.type=b.type
           and a.type=2
           and a.date=b.date
           and a.date=?
           order by a.id`,
    customer:`select 
           a.self_name, 
           a.ration_month ration_month_btz,
           a.ration_day ration_day_btz,
           a.finish_day finish_day_btz,
           a.finish_month finish_month_btz,
           a.target_day  target_day_btz,
           a.target_month target_month_btz,
           b.ration_month ration_month_xz,
           b.ration_day ration_day_xz,
           b.finish_day finish_day_xz,
           b.finish_month finish_month_xz,
           b.target_day  target_day_xz,
           b.target_month target_month_xz
           from selfbtzold a,
                selfnewaddold b
           where a.self_name=b.self_name
           and a.type=b.type
           and a.type=1
           and a.date=?
           and a.date=b.date
           order by a.id`

  }
}

module.exports = sqlMap;
