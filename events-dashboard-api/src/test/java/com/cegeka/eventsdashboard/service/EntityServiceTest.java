package com.cegeka.eventsdashboard.service;

import com.cegeka.eventsdashboard.domain.Post;
import com.cegeka.eventsdashboard.domain.PostVariable;
import com.cegeka.eventsdashboard.domain.Template;
import com.cegeka.eventsdashboard.domain.Variable;
import com.cegeka.eventsdashboard.repository.*;
import com.cegeka.eventsdashboard.web.admin.dto.PostDTO;
import com.cegeka.eventsdashboard.web.admin.dto.PostVariableDto;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.*;
import org.mockito.junit.MockitoJUnitRunner;

import static java.util.Optional.of;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class EntityServiceTest {

    public static final long POST_TEMPLATE_ID = 12L;
    public static final String POST_NAME = "Test Post";
    public static final String POST_URL = "/testPost";
    public static final String POST_VARIABLE_VALUE = "New test title";
    public static final String POST_VARIABLE_NAME = "title";
    public static final long VARIABLE_ID = 23L;

    @InjectMocks
    private PostService postService;

    @Mock
    private PostRepository postRepository;

    @Mock
    private VariableRepository variableRepository;

    @Mock
    private PostVariableRepository postVariableRepository;

    @Mock
    private TemplateRepository templateRepository;

    @Mock
    private PostPositionIdxRepository postPositionIdxRepository;

    @Captor
    private ArgumentCaptor<Post> savedPost;

    @Captor
    private ArgumentCaptor<PostVariable> savedVariable;

    @Test
    public void givenPostDTOWhenSaveThenSavePostWithVariables() {
        // GIVEN
        Template template = new Template();
        Variable variable = new Variable();
        variable.setId(VARIABLE_ID);

        PostVariableDto title = new PostVariableDto(POST_VARIABLE_NAME, POST_VARIABLE_VALUE);

        PostDTO postDTO = createPostDTO(title);

        when(templateRepository.findById(POST_TEMPLATE_ID)).thenReturn(of(template));
        when(variableRepository.findByNameAndTemplate(POST_VARIABLE_NAME, template)).thenReturn(variable);

        // WHEN
        postService.savePost(postDTO);

        // THEN
        verify(postRepository).save(savedPost.capture());
        verify(postVariableRepository).save(savedVariable.capture());

        assertThat(savedPost.getAllValues().size()).isEqualTo(1);
        Post capturedPost = savedPost.getValue();

        assertThat(savedVariable.getAllValues().size()).isEqualTo(1);
        PostVariable capturedVariable = savedVariable.getValue();

        assertThat(capturedPost.getName()).isEqualTo(POST_NAME);
        assertThat(capturedPost.getUrl()).isEqualTo(POST_URL);
        assertThat(capturedPost.getPostTemplate()).isEqualTo(template);

        assertThat(capturedVariable.getVariable()).isEqualTo(variable);
        assertThat(capturedVariable.getValue()).isEqualTo(POST_VARIABLE_VALUE);
    }

    private PostDTO createPostDTO(PostVariableDto title) {
        PostDTO postDTO = new PostDTO();
        postDTO.setPostTemplateId(POST_TEMPLATE_ID);
        postDTO.setName(POST_NAME);
        postDTO.setUrl(POST_URL);
        postDTO.getVariables().add(title);
        return postDTO;
    }
}
