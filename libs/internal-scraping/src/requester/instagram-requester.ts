import { ProducerTypeEnum } from '@lib/common/type/types';

export interface InstagramRequester {
  doScraping(producer: ProducerTypeEnum, cookies: string): Promise<any[]>;
}
/*
{
  items: [
        {
          taken_at: 1676520354,
          pk: '3039195235248564657',
          id: '3039195235248564657_698263952',
          device_timestamp: 1676520297707772,
          media_type: 2,
          code: 'CotY_bQDOmx',
          client_cache_key: 'MzAzOTE5NTIzNTI0ODU2NDY1Nw==.2',
          filter_type: 0,
          is_unified_video: false,
          should_request_ads: false,
          commerciality_status: 'not_commercial',
          is_paid_partnership: false,
          is_visual_reply_commenter_notice_enabled: true,
          timeline_pinned_user_ids: [Array],
          clips_tab_pinned_user_ids: [],
          has_delayed_metadata: false,
          comment_likes_enabled: true,
          comment_threading_enabled: true,
          max_num_visible_preview_comments: 2,
          has_more_comments: true,
          preview_comments: [],
          comments: [],
          comment_count: 171,
          can_view_more_preview_comments: false,
          hide_view_all_comment_entrypoint: false,
          inline_composer_display_condition: 'impression_trigger',
          user: [Object],
          can_viewer_reshare: true,
          like_count: 8282,
          has_liked: false,
          top_likers: [],
          facepile_top_likers: [],
          is_comments_gif_composer_enabled: true,
          image_versions2: [Object],
          original_width: 1080,
          original_height: 608,
          photo_of_you: false,
          is_organic_product_tagging_eligible: false,
          can_see_insights_as_brand: false,
          caption: [Object],
          caption_is_edited: true,
          highlight_post_metadata: null,
          coauthor_producers: null,
          coauthor_producer_can_see_organic_insights: null,
          group: null,
          is_groups_post_pending_admin_approval: null,
          invited_coauthor_producers: null,
          guide_metadata: null,
          comment_inform_treatment: [Object],
          sharing_friction_info: [Object],
          is_dash_eligible: 1,
          video_dash_manifest: '<MPD xmlns="urn:mpeg:dash:schema:mpd:2011" minBufferTime="PT1.500S" type="static" mediaPresentationDuration="PT0H0M55.074S" maxSegmentDuration="PT0H0M5.067S" profiles="urn:mpeg:dash:profile:isoff-on-demand:2011,http://dashif.org/guidelines/dash264">\n' +
            ' <Period duration="PT0H0M55.074S">\n' +
            '  <AdaptationSet segmentAlignment="true" maxWidth="1080" maxHeight="608" maxFrameRate="30" par="750:422" lang="und" subsegmentAlignment="true" subsegmentStartsWithSAP="1" FBUnifiedUploadResolutionMos="360:75.02">\n' +
            '   <Representation id="880447059857659vd" mimeType="video/mp4" codecs="avc1.64001F" width="1080" height="608" frameRate="30" sar="1:1" startWithSAP="1" bandwidth="644861" FBQualityClass="hd" FBQualityLabel="1080w" FBPlaybackResolutionMos="0:100.00,360:93.22,480:91.31,608:85.29" FBEncodingTag="dash_high_1_v1">\n' +
            '    <BaseURL urlExpiration="1681689857">https://scontent-ssn1-1.cdninstagram.com/v/t66.30100-16/167235966_568283871989601_731586174959116364_n.mp4?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=109&amp;_nc_ohc=A1-JkOp5Yk4AX-a7vmZ&amp;edm=ACWDqb8BAAAA&amp;ccb=7-5&amp;oh=00_AfD3GSPgypzDVwZtC50opTbgfArztsPpyf9AGm7_1NZdAQ&amp;oe=643C260D&amp;_nc_sid=1527a3</BaseURL>\n' +
            '    <SegmentBase indexRangeExact="true" indexRange="846-1009" FBFirstSegmentRange="1010-149800" FBSecondSegmentRange="149801-359478" FBFirstSegmentDuration="5000" FBPrefetchSegmentRange="1010-149800">\n' +
            '      <Initialization range="0-845"/>\n' +
            '    </SegmentBase>\n' +
            '   </Representation>\n' +
            '  <Representation id="1777231659337315v" mimeType="video/mp4" codecs="avc1.64001F" width="750" height="422" frameRate="30" sar="1:1" startWithSAP="1" bandwidth="121468" FBQualityClass="hd" FBQualityLabel="750w" FBPlaybackResolutionMos="0:100.00,360:74.20,480:70.66,608:60.55" FBEncodingTag="dash_high_4_v1">\n' +
            '    <BaseURL urlExpiration="1681689857">https://scontent-ssn1-1.cdninstagram.com/v/t66.30100-16/319190187_1424790771659610_7712578134966602888_n.mp4?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=106&amp;_nc_ohc=Q03xu6sTBIEAX9RTgKS&amp;edm=ACWDqb8BAAAA&amp;ccb=7-5&amp;oh=00_AfB9LOSazRkMb7VHJE8ZwaRfTS3Viho9FX1dfPHhGgjcuA&amp;oe=643C8134&amp;_nc_sid=1527a3</BaseURL>\n' +
            '    <SegmentBase indexRangeExact="true" indexRange="847-1010" FBFirstSegmentRange="1011-32982" FBSecondSegmentRange="32983-80453" FBFirstSegmentDuration="5000" FBPrefetchSegmentRange="1011-32982">\n' +
            '      <Initialization range="0-846"/>\n' +
            '    </SegmentBase>\n' +
            '   </Representation>\n' +
            '  <Representation id="882763336110027v" mimeType="video/mp4" codecs="avc1.64001F" width="1080" height="608" frameRate="30" sar="1:1" startWithSAP="1" bandwidth="223226" FBQualityClass="hd" FBQualityLabel="1080w" FBPlaybackResolutionMos="0:100.00,360:81.11,480:77.53,608:70.08" FBEncodingTag="dash_high_3_v1">\n' +
            '    <BaseURL urlExpiration="1681689857">https://scontent-ssn1-1.cdninstagram.com/v/t66.30100-16/311337421_594656949146279_4188169688711568872_n.mp4?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=111&amp;_nc_ohc=zuuTTm6dzBoAX8IXaDh&amp;edm=ACWDqb8BAAAA&amp;ccb=7-5&amp;oh=00_AfC8A_BgzTRIPTNqWVEY54CRFfepjMJ6tiWCgtqKE6Z14Q&amp;oe=643C5FDA&amp;_nc_sid=1527a3</BaseURL>\n' +
            '    <SegmentBase indexRangeExact="true" indexRange="846-1009" FBFirstSegmentRange="1010-55800" FBSecondSegmentRange="55801-138667" FBFirstSegmentDuration="5000" FBPrefetchSegmentRange="1010-55800">\n' +
            '      <Initialization range="0-845"/>\n' +
            '    </SegmentBase>\n' +
            '   </Representation>\n' +
            '  <Representation id="940735930430685v" mimeType="video/mp4" codecs="avc1.64001F" width="1080" height="608" frameRate="30" sar="1:1" startWithSAP="1" bandwidth="381663" FBQualityClass="hd" FBQualityLabel="1080w" FBPlaybackResolutionMos="0:100.00,360:88.86,480:86.26,608:78.06" FBEncodingTag="dash_high_2_v1">\n' +
            '    <BaseURL urlExpiration="1681689857">https://scontent-ssn1-1.cdninstagram.com/v/t66.30100-16/163385981_216806967423531_8679316459014954705_n.mp4?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=103&amp;_nc_ohc=PbkW0P8_DbEAX9Jz7fv&amp;edm=ACWDqb8BAAAA&amp;ccb=7-5&amp;oh=00_AfCOstMJHR_Az8EEhvKpvxapIQmJTtPgW_Ep3JhrWYvgJg&amp;oe=643C5814&amp;_nc_sid=1527a3</BaseURL>\n' +
            '    <SegmentBase indexRangeExact="true" indexRange="846-1009" FBFirstSegmentRange="1010-92882" FBSecondSegmentRange="92883-226519" FBFirstSegmentDuration="5000" FBPrefetchSegmentRange="1010-92882">\n' +
            '      <Initialization range="0-845"/>\n' +
            '    </SegmentBase>\n' +
            '   </Representation>\n' +
            '  </AdaptationSet>\n' +
            ' <AdaptationSet segmentAlignment="true" lang="und" subsegmentAlignment="true" subsegmentStartsWithSAP="1" bitstreamSwitching="true">\n' +
            '   <Representation id="856367298804559ad" mimeType="audio/mp4" codecs="mp4a.40.5" audioSamplingRate="44100" startWithSAP="1" bandwidth="84395" FBEncodingTag="dash_ln_audio_v1">\n' +
            '    <AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2"/>\n' +
            '    <BaseURL urlExpiration="1681689857">https://scontent-ssn1-1.cdninstagram.com/v/t66.30100-16/48474950_562622965811283_3282454062600497525_n.mp4?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=103&amp;_nc_ohc=Z7A6msPN-VkAX9QGje0&amp;edm=ACWDqb8BAAAA&amp;ccb=7-5&amp;oh=00_AfD0Y9cs5QLFz_9gS0tjH05jK-2VU-40s3a8nHyycc5MZQ&amp;oe=643C2D61&amp;_nc_sid=1527a3</BaseURL>\n' +
            '    <SegmentBase indexRangeExact="true" indexRange="783-958" FBFirstSegmentRange="959-55114" FBSecondSegmentRange="55115-107455" FBFirstSegmentDuration="4852" FBPrefetchSegmentRange="959-55114">\n' +
            '      <Initialization range="0-782"/>\n' +
            '    </SegmentBase>\n' +
            '   </Representation>\n' +
            '  </AdaptationSet>\n' +
            ' </Period>\n' +
            '</MPD>',
          video_codec: 'avc1.64001F',
          number_of_qualities: 4,
          video_versions: [Array],
          has_audio: true,
          video_duration: 55.125,
          original_media_has_visual_reply_media: false,
          like_and_view_counts_disabled: false,
          can_viewer_save: true,
          is_in_profile_grid: false,
          profile_grid_control_enabled: false,
          featured_products: [],
          play_count: 194526,
          attribution: null,
          organic_tracking_token: 'eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiNGUwNTNlMzRkM2NhNDFlYTkyYWY1ZDZlOTBjNGFkNjUzMDM5MTk1MjM1MjQ4NTY0NjU3Iiwic2VydmVyX3Rva2VuIjoiMTY4MTU2MDI1Nzg2NXwzMDM5MTk1MjM1MjQ4NTY0NjU3fDQ3MzQ3NjIyNTQ4fDVlZTFkODRiMTY0NTU3ZTRkYTNhMGNlNTlkZDY0YWFiOTRhMDQ5M2U5Mjc2N2FhZTc5ZGU3OTg3ZjVkOTA5MmUifSwic2lnbmF0dXJlIjoiIn0=',
          is_third_party_downloads_eligible: false,
          has_shared_to_fb: 0,
          product_type: 'clips',
          show_shop_entrypoint: false,
          deleted_reason: 0,
          integrity_review_decision: 'pending',
          commerce_integrity_review_decision: null,
          music_metadata: null,
          is_artist_pick: false,
          ig_media_sharing_disabled: false,
          clips_metadata: [Object],
          media_cropping_info: [Object]
        },
        {
          taken_at: 1681351425,
          pk: '3079721427566261095',
          id: '3079721427566261095_698263952',
          device_timestamp: 853283422561867,
          media_type: 1,
          code: 'Cq9XlJBPvNn',
          client_cache_key: 'MzA3OTcyMTQyNzU2NjI2MTA5NQ==.2',
          filter_type: 0,
          is_unified_video: false,
          should_request_ads: false,
          commerciality_status: 'not_commercial',
          is_paid_partnership: false,
          is_visual_reply_commenter_notice_enabled: false,
          clips_tab_pinned_user_ids: [],
          has_delayed_metadata: false,
          comment_likes_enabled: true,
          comment_threading_enabled: true,
          max_num_visible_preview_comments: 2,
          has_more_comments: true,
          preview_comments: [],
          comments: [],
          comment_count: 31,
          can_view_more_preview_comments: false,
          hide_view_all_comment_entrypoint: false,
          inline_composer_display_condition: 'impression_trigger',
          user: [Object],
          can_viewer_reshare: true,
          like_count: 3726,
          has_liked: false,
          top_likers: [],
          facepile_top_likers: [],
          is_comments_gif_composer_enabled: true,
          image_versions2: [Object],
          original_width: 1440,
          original_height: 1152,
          accessibility_caption: "Photo by OD COMPANY 오디컴퍼니 on April 12, 2023. May be an image of 3 people and text that says '각오했어, 작은희생 난정의로운세상을 내 손으로 만들 거야, 끝까지 HurricaneRep A 네스노트'.",
          photo_of_you: false,
          is_organic_product_tagging_eligible: false,
          can_see_insights_as_brand: false,
          caption: [Object],
          caption_is_edited: false,
          highlight_post_metadata: null,
          coauthor_producers: null,
          coauthor_producer_can_see_organic_insights: null,
          group: null,
          is_groups_post_pending_admin_approval: null,
          invited_coauthor_producers: null,
          guide_metadata: null,
          comment_inform_treatment: [Object],
          sharing_friction_info: [Object],
          original_media_has_visual_reply_media: false,
          like_and_view_counts_disabled: false,
          can_viewer_save: true,
          is_in_profile_grid: false,
          profile_grid_control_enabled: false,
          featured_products: [],
          attribution: null,
          organic_tracking_token: 'eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiNGUwNTNlMzRkM2NhNDFlYTkyYWY1ZDZlOTBjNGFkNjUzMDc5NzIxNDI3NTY2MjYxMDk1Iiwic2VydmVyX3Rva2VuIjoiMTY4MTU2MDI1NzgzOHwzMDc5NzIxNDI3NTY2MjYxMDk1fDQ3MzQ3NjIyNTQ4fGM1NGFhNjM4ZDYyNDA0YmVmMGY3MjAwZGY4YzFjNmQ1NzMwOGEwNzY0MmYwYzg5OTJhZmVjM2MzNGY3MTc3OTUifSwic2lnbmF0dXJlIjoiIn0=',
          has_shared_to_fb: 0,
          product_type: 'feed',
          show_shop_entrypoint: false,
          deleted_reason: 0,
          integrity_review_decision: 'pending',
          commerce_integrity_review_decision: '',
          music_metadata: [Object],
          is_artist_pick: false,
          ig_media_sharing_disabled: false
        }
      ],
      num_results: 2,
      more_available: true,
      next_max_id: '3079721427566261095_698263952',
      user: {
        pk: '698263952',
        pk_id: '698263952',
        username: 'od_musical',
        full_name: 'OD COMPANY 오디컴퍼니',
        is_private: false,
        is_verified: true,
        profile_pic_id: '3053756392712095151_698263952',
        profile_pic_url: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/334487740_616059900371369_5077464731057217911_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=1IeJb1aJ2GAAX9Bm9ky&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAmkBhUBdOL_DuwANcnT_vHUQhuIMzPjYGQVY5CESmIsg&oe=643FB8CE&_nc_sid=1527a3',
        profile_grid_display_type: 'default'
      },
      auto_load_more_enabled: false,
      status: 'ok'
    }     
*/
