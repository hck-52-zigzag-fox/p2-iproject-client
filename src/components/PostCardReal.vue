<script>
import { useDataStore } from "../stores/dataStore";
import { mapState, mapActions } from "pinia";
export default {
  name: "PostCardReal",
  props: ["post", "dataOneProfile", ""],
  data() {
    return {
      dataComment: {
        content: "",
      },
    };
  },
  computed: {
    ...mapState(useDataStore, ["dataAllComments", "lokal"]),
    getIndonesianTimeWithTime() {
      let date = new Date(this.post.createdAt);
      let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      return date.toLocaleDateString("id-ID", options);
    },
  },
  methods: {
    ...mapActions(useDataStore, [
      "handleFetchAllComments",
      "handleAddComment",
      "handleDeleteComment",
    ]),

    convertTime() {
      let date = new Date(
        this.post.Comments.forEach((el) => {
          let options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          };
          el.createdAt = date.toLocaleDateString("id-ID", options);
        })
      );
    },
  },
  created() {},
};
</script>
<template>
  <div class="card">
    <!-- Card header START -->
    <div class="card-header border-0 pb-0">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <!-- Avatar -->
          <div class="avatar avatar-story me-2">
            <a href="#!">
              <img
                class="avatar-img rounded-circle"
                :src="post.User.Profile.profilePict"
                alt=""
              />
            </a>
          </div>
          <!-- Info -->
          <div>
            <div class="nav nav-divider">
              <h6 class="nav-item card-title mb-0">
                <a href="#!"> {{ post.User.Profile.name }} </a>
              </h6>
              <span class="nav-item small"
                >{{ getIndonesianTimeWithTime }}
              </span>
            </div>
            <p class="mb-0 small">
              {{ post.User.Profile.job }} at {{ post.User.Profile.company }}
            </p>
          </div>
        </div>
        <!-- Card feed action dropdown START -->
        <div class="dropdown">
          <a
            href="#"
            class="text-secondary btn btn-secondary-soft-hover py-1 px-2"
            id="cardFeedAction"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-three-dots"></i>
          </a>
          <!-- Card feed action dropdown menu -->
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="cardFeedAction"
          >
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-bookmark fa-fw pe-2"></i>Save post</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-x-circle fa-fw pe-2"></i>Hide post</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-slash-circle fa-fw pe-2"></i>Block</a
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-flag fa-fw pe-2"></i>Report post</a
              >
            </li>
          </ul>
        </div>
        <!-- Card feed action dropdown END -->
      </div>
    </div>
    <!-- Card header END -->
    <!-- Card body START -->
    <div class="card-body">
      <p>
        {{ post.content }}
      </p>
      <!-- Card img -->
      <img
        class="card-img"
        v-if="post.imgUrl !== '#'"
        :src="post.imgUrl"
        alt="Post"
      />
      <!-- Feed react START -->
      <ul class="nav nav-stack py-3 small">
        <li class="nav-item">
          <a class="nav-link active" href="#!">
            <i class="bi bi-hand-thumbs-up-fill pe-1"></i>Liked
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#!">
            <i class="bi bi-chat-fill pe-1"></i>Comments
          </a>
        </li>
        <!-- Card share action START -->
        <li class="nav-item dropdown ms-sm-auto">
          <a
            class="nav-link mb-0"
            href="#"
            id="cardShareAction"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-reply-fill flip-horizontal ps-1"></i>Share
          </a>
          <!-- Card share action dropdown menu -->
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="cardShareAction"
          >
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-envelope fa-fw pe-2"></i>Send via Direct
                Message</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-link fa-fw pe-2"></i>Copy link to post</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-share fa-fw pe-2"></i>Share post via …</a
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-pencil-square fa-fw pe-2"></i>Share to News
                Feed</a
              >
            </li>
          </ul>
        </li>
        <!-- Card share action END -->
      </ul>
      <!-- Feed react END -->

      <!-- Add comment -->
      <div class="d-flex mb-3">
        <!-- Avatar -->
        <div class="avatar avatar-xs me-2">
          <a href="#!">
            <img
              class="avatar-img rounded-circle"
              :src="dataOneProfile.profilePict"
              alt=""
            />
          </a>
        </div>
        <!-- Comment box  -->
        <form class="w-100">
          <textarea
            v-model="dataComment.content"
            @keydown.enter.exact.prevent="
              handleAddComment(dataComment.content, post.id)
            "
            data-autoresize
            class="form-control pe-4 bg-light"
            rows="1"
            placeholder="Add a comment..."
          ></textarea>
        </form>
      </div>
      <!-- Comment wrap START -->
      <ul class="comment-wrap list-unstyled">
        <!-- Comment item START -->
        <li v-for="x in post.Comments" :key="x.id" class="comment-item">
          <div class="d-flex position-relative">
            <!-- Avatar -->
            <div class="avatar avatar-xs">
              <a href="#!"
                ><img
                  class="avatar-img rounded-circle"
                  :src="x.User.Profile.profilePict"
                  alt=""
              /></a>
            </div>
            <div class="ms-2">
              <!-- Comment by -->
              <div class="bg-light rounded-start-top-0 p-3 rounded">
                <div class="d-flex justify-content-between">
                  <h6 class="mb-1">
                    <a href="#!"> {{ x.User.Profile.name }} </a>
                  </h6>
                </div>
                <p class="small mb-0">{{ x.content }}</p>
              </div>
              <!-- Comment react -->
              <ul class="nav nav-divider py-2 small">
                <li class="nav-item">
                  <a
                    v-if="x.User.id == dataOneProfile.id"
                    @click.prevent="handleDeleteComment(x.id)"
                    class="nav-link"
                    href="#!"
                  >
                    delete</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </li>

        <!-- Comment item END -->
        <!-- Comment item START -->

        <!-- Comment item END -->
      </ul>
      <!-- Comment wrap END -->
    </div>
    <!-- Card body END -->
    <!-- Card footer START -->

    <!-- Card footer END -->
  </div>
</template>
