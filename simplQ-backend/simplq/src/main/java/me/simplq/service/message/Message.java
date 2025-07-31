package me.simplq.service.message;

public interface Message {
  String FOOTER =
      "<p>Gracias por utilizar este sistema.</p>"
          + "<p>Equipo de soporte</p>";

  String subject();

  String body();

  String bodyHtml();

  String shortBody();

  Boolean isPriority();
}
