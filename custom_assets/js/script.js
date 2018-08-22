

(function($) {

  var insert_chain_status_html = function() {
    var chain_status_html = `
      <section class="mbr-section info1 chain_status" style="background-color:#ffffff">
        <div class="container">
          <div class="row justify-content-center content-row">

            <div class="col-6 col-lg-3 col-md-6 text-center" >
              <strong>Blocks</strong>
              <p id="chain_blocks"></p>
            </div>
            <div class="col-6 col-lg-3 col-md-6 text-center">
              <strong>Difficulty</strong>
              <p id="chain_difficulty"></p>
            </div>
            <div class="col-6 col-lg-3 col-md-6 text-center">
              <strong>Connections</strong>
              <p id="chain_connections"></p>
            </div>
            <div class="col-6 col-lg-3 col-md-6 text-center">
              <strong>Total</strong>
              <p id="chain_total_amount"></p>
            </div>

          </div>

          <div class="row justify-content-center content-row">
            <div class="col-12 text-right" id="now_time">
            </div>
          </div>

        </div>
      </section>
    `;
    $("section.chain_status").remove();
    $("section#toggle1-9").before(chain_status_html);
  }

  var fill_chain_summary = function() {
    $.get("https://a7exuhkake.execute-api.ap-northeast-2.amazonaws.com/prod/summary",
      function(data) {
        insert_chain_status_html();
        $(".chain_status #chain_blocks").text(data.blocks);
        $(".chain_status #chain_difficulty").text(data.difficulty);
        $(".chain_status #chain_connections").text(data.connections);
        $(".chain_status #chain_total_amount").text(data.total_amount);
        $(".chain_status #now_time").text(new Date().toLocaleString());
        setTimeout(fill_chain_summary, 60000);
      });
  }

  fill_chain_summary();

})(jQuery);
