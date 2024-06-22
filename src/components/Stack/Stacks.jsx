import React from "react";
import Stack1 from "./Stack1";
import Stack2 from "./Stack2";

export const Stacks = () => {
  return (
    <div className="w-[300px] md:w-[700px] lg:w-[950px] xl:w-[1100px] 2xl:w-[1200px] m-auto mt-10 md:mt-[160px]">
      <h1 className="text-[22px] md:text-[30px] text-center">
        Empower Your Ad-Stack With Our Leading Tech
      </h1>
      <div>
        <div id="as">
          <Stack1
            title="Ad Server"
            heading1="AI-Driven Dynamic Pricing: "
            details1="Our Ad Server boasts a sophisticated AI algorithm for real-time floor price adjustments to optimize ad revenue."
            heading2="Performance Focused Ad Serving: "
            details2="Prioritizes top-performing ad sources to secure superior CPMs and Fill Rates, maximizing profitability."
            heading3="Cross-Screen Compatibility: "
            details3="Seamlessly serves display and video ads across all screen types – from web and mobile to CTV/OTT and DOOH."
            heading4="Advanced Ad Optimization: "
            details4="Leveraging cutting-edge technology to ensure that your ad inventory is utilized to its fullest potential for higher earnings."
            heading5="Universal Ad Solution: "
            details5="Built to cater to diverse advertising needs, our server ensures perfect ad display regardless of the platform – ensuring consistent performance and user experience."
            img="img/server.jpeg"
          />
        </div>
        <div id="am">
          <Stack2
            title="Ad Marketplace"
            heading1="Diverse Advertising Opportunities: "
            details1="Leverage the expansive reach of direct advertisers and   sophisticated RTB demand with cutting-edge programmatic solutions."
            heading2="Publisher Revenue Optimization: "
            details2="Elevate your visibility among a vast network of advertisers,   boosting your ad revenue while managing ad preferences seamlessly."
            heading3="Premium Advertiser Access: "
            details3="Engage with top-tier publishers through a streamlined   marketplace, enhancing ad buys with precise targeting and bidding options."
            heading4="Selective Ad Implementation for Publishers: "
            details4="Exercise full discretion over your ad landscape,   ensuring content aligns with audience expectations and standards."
            heading5="Targeted Advertising Made Simple: "
            details5="Navigate the marketplace with ease, pinpointing the   perfect publisher matches for optimal audience engagement and campaign performance."
            img="img/marketplace.jpeg"
          />
        </div>
        <div id="dar">
          <Stack1
            title="Dynamic Ad Refresh"
            heading1="Real-Time Ad Content Update: "
            details1="Automatically updates ad content in real-time, ensuring that viewers are always presented with the most relevant and engaging advertisements."
            heading2="Optimized Ad Performance: "
            details2="Enhances ad performance by preventing ad fatigue and ensuring that users are consistently exposed to fresh and captivating content."
            heading3="Personalized Ad Experience: "
            details3="Tailors ad content based on user behavior, preferences, and context, maximizing the likelihood of engagement and conversion."
            heading4="Increased Revenue Potential: "
            details4="Maximizes ad inventory utilization and revenue potential by maintaining user interest and encouraging prolonged engagement with dynamic content updates."
            heading5="Efficient Resource Utilization: "
            details5="Minimizes manual intervention and resource allocation by automating the process of ad content refresh, allowing advertisers to focus on strategic initiatives and campaign optimization."
            img="img/refresh.png"
          />
        </div>
        <div id="hb">
          <Stack2
            title="Header bidding"
            heading1="Transparent Header Bidding: "
            details1="Increase profits effortlessly with our setup and implementation, taking responsibility while you enjoy growing revenue."
            heading2="Automatic Partner Selection: "
            details2="Our engine selects optimal partners, balancing bid competition   without sacrificing speed."
            heading3="Customizable Timeout Management: "
            details3="Fine-tuned timeouts balance yield and latency, ensuring   optimal auction performance."
            heading4="Bring Your Own Demand (BYOD): "
            details4="eamlessly integrate existing partners for enhanced   competition and revenue generation."
            heading5="Granular Control & Optimization: "
            details5="Selectively enable/disable bidders for maximum yield while   maintaining page performance."
            img="img/bidding.jpeg"
          />
        </div>
        <div id="vp">
          <Stack1
            title="Video Player"
            heading1="Lightweight & Fast: "
            details1="Enjoy superior performance with an ultra-lightweight and ultra-fast   video player."
            heading2="Versatile Support: "
            details2="Play Instream and Outstream videos with comprehensive support         for various formats."
            heading3="Flexible Player Modes: "
            details3="Choose from multiple modes including In-read, floating, and   sticky for diverse experiences."
            heading4="Customizable Experience: "
            details4="Personalize player size, appearance, and performance to   match your brand perfectly."
            heading5="Integrated CMS & Studio: "
            details5="Manage video inventory and player functions effortlessly with   our comprehensive CMS and Studio."
            img="img/video.png"
          />
        </div>
        <div id="cms">
          <Stack2
            title="Content Management System (CMS)"
            heading1="Comprehensive Video Management: "
            details1="Efficiently handle video content distribution across the open Web."
            heading2="Cross-Platform Asset Management: "
            details2="Manage video assets seamlessly across web, mobile, and   CTV platforms."
            heading3="Performance Tracking with Analytics: "
            details3="Utilize video analytics to measure and optimize   performance effectively."
            heading4="Streamlined Content Library Management: "
            details4="Easily manage your content library with intuitive   organization and search capabilities."
            heading5="Flexible Player Customization: "
            details5="Customize the player to suit your needs, ensuring an optimal   viewing experience."
            img="img/cms.png"
          />
        </div>
        <div id="sdk">
          <Stack1
            title="Mobile SDK"
            heading1="Versatile Streaming Support: "
            details1="Our SDKs support HLS, MPEG-DASH, progressive download, live   streaming, and VOD formats."
            heading2="Effortless Video Ad Integration: "
            details2="Integrate VAST, VPAID, and VMAP support for optimal video   monetization."
            heading3="Extensive Customization Options: "
            details3="Fully customize SDKs for native apps, including player   interface, playlists, rotation, and more."
            heading4="Subtitle and Caption Compatibility: "
            details4="Support various subtitle and closed caption formats for a   rich video experience."
            heading5="Seamless Third-Party Integration: "
            details5="Easily integrate third-party components, especially ad   integrations, into your native app using our SDKs."
            img="img/sdk.jpeg"
          />
        </div>
        <div id="dai">
          <Stack2
            title="SSAI/DAI"
            heading1="Ad Management Features: "
            details1="Implement ad podding, prefetching, dynamic auctions,   programmatic, direct campaigns, and contextual targeting."
            heading2="Flexible Integration: "
            details2="Easily integrate with any CMS, workflow, or ad player for maximum   compatibility."
            heading3="Revenue Optimization: "
            details3="Maximize revenue with competition across demand types and dynamic   floor pricing strategies."
            heading4="CTV Monetization: "
            details4="Monetize apps across all CTV platforms with engaging video ads for   increased revenue."
            heading5="Customizable Business Rules: "
            details5="Apply rules to determine ad inventory monetization and split   inventory for platform needs."
            img="img/dai.jpeg"
          />
        </div>
      </div>
    </div>
  );
};
