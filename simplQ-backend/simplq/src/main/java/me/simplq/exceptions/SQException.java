package me.simplq.exceptions;

/** Base exception class that all our custom exceptions will extend */
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/** Base exception class that all our custom exceptions will extend */
public abstract class SQException extends RuntimeException {

  private static final Map<Enum<?>, String> MESSAGE_MAP = new ConcurrentHashMap<>();

  protected static void registerMessage(Enum<?> code, String message) {
    MESSAGE_MAP.put(code, message);
  }

  protected static String messageFor(Enum<?> code) {
    return MESSAGE_MAP.get(code);
  }

  public SQException() {
    super();
  }

  public SQException(String message, Throwable cause) {
    super(message, cause);
  }

  public SQException(String message) {
    super(message);
  }
}
