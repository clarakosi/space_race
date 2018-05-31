from channels.generic.websocket import AsyncWebsocketConsumer
import json

class QuizConsumer(AsyncWebsocketConsumer):
  async def connect(self):
    self.quiz_name = self.scope['url_route']['kwargs']['slug']
    self.quiz_group_name = 'quiz_%s' % self.quiz_name

    # Join quiz group
    await self.channel_layer.group_add(
      self.quiz_group_name,
      self.channel_name
    )

    await self.accept()

  async def disconnect(self, close_code):
      # Leave quiz group
    await self.channel_layer.group_discard(
      self.quiz_group_name,
      self.channel_name
    )

  # Receive message from WebSocket
  async def receive(self, text_data):
    text_data_json = json.loads(text_data)
    # message = text_data_json['message']

    # Send message to quiz group
    await self.channel_layer.group_send(
      self.quiz_group_name,
        {
          'type': 'chat_message',
          'message': text_data_json
        }
    )

  # Receive message from quiz group
  async def chat_message(self, event):
    message = event['message']

    # Send message to WebSocket
    await self.send(text_data=json.dumps({
      'message': message
    }))