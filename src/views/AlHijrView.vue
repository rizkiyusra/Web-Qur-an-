<template>
  <div class="container p-5 font-serif">
    <div>
      <h1 class="text-xl justify-self-start" v-if="chapter">
        Surah {{ chapter.name_simple }} "{{ chapter.translated_name.name }}" <br /> {{ chapter.verses_count }} Ayat
      </h1>
    </div>
    <br>
    <div>
      <p class="">Info surah </p>
      <h1 class="bg-gray-300 text-justify" v-if="chapter_info">
        {{ chapter_info.text }}
      </h1>
    </div>
    <div>
      <div class="mt-2.5 text-right" v-if="audio_file">
        <audio controls class="shadow-xl rounded-full absolute object-right right-0 mx-5">
          <source :src="audio_file.audio_url" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
    <div class="mt-20">
      <p v-for="verse in verses" :key="verse" class="my-5 text-4xl font-bold text-right">
        {{ verse.text_uthmani }}
      </p>
      <p class="text-center font-bold">Terjemahan</p>
      <p v-for="translations in translations" :key="translations" class="my-5 text-xl">
        {{ translations.text }}
        <br>
      <hr>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlHijrView",
  data() {
    return {
      chapter: null,
      verse: null,
      chapter_info: null,
      audio_file: null,
      translations: null,
    };
  },
  methods: {
    async getChapter() {
      fetch("https://api.quran.com/api/v4/chapters/15?language=id", {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          this.chapter = json.chapter;
        });
    },
    async getVerse() {
      fetch(
        "https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=15",
        {
          method: "GET",
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          this.verses = json.verses;
        });
    },
    async getChapterInfo() {
      fetch("https://api.quran.com/api/v4/chapters/15/info?language=id", {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          this.chapter_info = json.chapter_info;
        });
    },
    async getAudio_File() {
      fetch("https://api.quran.com/api/v4/chapter_recitations/7/15", {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          this.audio_file = json.audio_file;
        });
    },
    async getTranslation() {
      fetch(
        "https://api.quran.com/api/v4/quran/translations/33?fields=id&chapter_number=15",
        {
          method: "GET",
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          this.translations = json.translations;
        });
    },
  },
  mounted() {
    this.getChapter();
    this.getVerse();
    this.getChapterInfo();
    this.getAudio_File();
    this.getTranslation();
  },
};
</script>