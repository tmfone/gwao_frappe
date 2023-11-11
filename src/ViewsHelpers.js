function buildErrorCard(opts) {
  var errorText = opts.errorText;

  if (opts.exception && !errorText) {
    errorText = opts.exception.toString();
  }

  if (!errorText) {
    errorText = 'No additional information is available.';
  }

  var card = CardService.newCardBuilder();
  card.setHeader(
      CardService.newCardHeader().setTitle('An unexpected error occurred')
  );
  card.addSection(
      CardService.newCardSection().addWidget(
          CardService.newTextParagraph().setText(errorText)
      )
  );

  if (opts.showStackTrace && opts.exception && opts.exception.stack) {
    var stack = opts.exception.stack.replace(/\n/g, '<br/>');
    card.addSection(
        CardService.newCardSection()
            .setHeader('Stack trace')
            .addWidget(CardService.newTextParagraph().setText(stack))
    );
  }

  return card.build();
}

function buildInfoCard(opts) {
  var text = opts.text;
  var title = opts.title ? opts.title : trsl('tInfoTitle');

  var card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader()
    .setTitle(title)
    .setImageUrl('https://www.gstatic.com/images/icons/material/system/1x/report_black_24dp.png')
    );
  
  card.addSection(
      CardService.newCardSection()
      .addWidget(
          CardService.newTextParagraph().setText(text)
      )
  );
  return card.build();
}

