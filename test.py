import os
import openai
openai.api_key = "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"
audio_file = open("run.mp3", "rb")
transcript = openai.Audio.transcribe("whisper-1", audio_file)

print(transcript)


